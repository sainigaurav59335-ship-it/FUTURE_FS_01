import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve paths for local file database fallback
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE_PATH = path.join(__dirname, 'messages_db.json');

// Middlewares
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://future-fs-01-3684.vercel.app'],
  credentials: true
}));

// Rate Limiter: Max 5 contact submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many submissions. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Optional MongoDB Mongoose Connection
let isMongoConnected = false;
let MessageModel;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('MongoDB Connected Successfully.');
      isMongoConnected = true;
      
      const messageSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        subject: { type: String, required: true },
        message: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      });
      
      MessageModel = mongoose.model('ContactMessage', messageSchema);
    })
    .catch((err) => {
      console.warn('MongoDB connection failed. Falling back to local JSON file database. Error:', err.message);
    });
} else {
  console.log('No MONGODB_URI found in env. Checking MySQL configurations.');
}

// Optional MySQL Connection
let mysqlPool = null;
let isMysqlConnected = false;

if (process.env.MYSQL_HOST) {
  try {
    mysqlPool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT || '3306'),
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE || 'portfolio_db',
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0
    });
    
    // Test connection and auto-create table
    const connection = await mysqlPool.getConnection();
    console.log('MySQL Connected Successfully.');
    isMysqlConnected = true;
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
  } catch (err) {
    console.warn('MySQL Connection failed. Error:', err.message);
  }
} else {
  console.log('No MYSQL_HOST found in env.');
}

if (!isMongoConnected && !isMysqlConnected) {
  console.log('Using local JSON file database fallback.');
}

// Helper: Save message to local JSON file
async function saveMessageToLocalFile(msgData) {
  try {
    let existingData = [];
    try {
      const fileContent = await fs.readFile(DB_FILE_PATH, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch (readErr) {
      // File doesn't exist or is empty, we will create a new array
    }
    
    const newRecord = {
      id: Date.now().toString(),
      ...msgData,
      createdAt: new Date().toISOString()
    };
    
    existingData.push(newRecord);
    await fs.writeFile(DB_FILE_PATH, JSON.stringify(existingData, null, 2));
    console.log(`Saved message to local database: ${DB_FILE_PATH}`);
    return newRecord;
  } catch (err) {
    console.error('Failed to save message locally:', err);
    throw new Error('Database saving error');
  }
}

// Mail Transporter setup (SMTP with Ethereal fallback)
async function getMailTransporter() {
  // If SMTP configs are fully defined in .env, use them
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Fallback: Generate Ethereal Email test credentials on-the-fly
  console.log('Generating Ethereal SMTP test credentials for email notifications...');
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

// API Route for Contact Form Submit
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Inputs validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  if (!subject || !subject.trim()) {
    return res.status(400).json({ error: 'Subject is required' });
  }
  if (!message || !message.trim() || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters long' });
  }


  const msgData = { name, email, subject, message };

  try {
    // 2. Save to database (MongoDB, MySQL, or local JSON file)
    if (isMongoConnected && MessageModel) {
      await MessageModel.create(msgData);
      console.log('Saved contact submission to MongoDB.');
    } else if (isMysqlConnected && mysqlPool) {
      await mysqlPool.query(
        'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
        [name, email, subject, message]
      );
      console.log('Saved contact submission to MySQL database.');
    } else {
      await saveMessageToLocalFile(msgData);
    }

    // Skip Email notification (Temporary Fix)
    console.log("Contact form submitted successfully");

    return res.status(200).json({
      message: "Message received successfully!"
    });

  }catch (err) {
    console.error('Contact processing failure:', err);
    return res.status(500).json({
      error: 'Server error processing contact request.'
    });
  }
});

// Server listener
app.listen(PORT, () => {
  console.log(`Backend Server running on port: ${PORT}`);
});

