# Premium Personal Portfolio & Contact Engine

This is a modern, professional, and fully responsive Personal Portfolio Website designed to showcase developer skills, projects, and work history.

## Features

- **Premium UI/UX Design**: Glassmorphism cards, glowing radial background orbs, sleek customized scrollbars, and modern typography (Outfit + Inter).
- **Interactive Capabilities**: Auto-looping typing text animations, full portfolio project filtering grid, project expansion detail modals, and responsive image views.
- **Micro-interactions**: Hover expansions, smooth page section scroll transitions, and IntersectionObserver scroll reveal fade-in/up effects.
- **Interactive Timeline**: Responsive tabs to toggle between professional employment and education records.
- **Responsive Navigation**: Glassmorphic sticky menu with scroll-progress tracking, active element highlighted anchors, and full mobile slide-out sidebar support.
- **Light & Dark Mode**: Instant state toggling with CSS variables and state persistence helper hooks.
- **Secure Contact Form**: Live client-side validations, submission rate limits to prevent spam, loading indicators, and a confetti trigger upon success.
- **Node.js Express Backend**: Fully functional contact form API processing route with secure parsing and database logging.
- **Dual Database Modes**: Persists submissions to a MongoDB database (via Mongoose schemas) or falls back automatically to a local JSON file database (`messages_db.json`) if MongoDB URI is omitted.
- **Dual Email Notification Modes**: Forwards contact requests directly using customized SMTP variables (Gmail, SendGrid, Outlook) or generates an active Ethereal sandbox test account dynamically with readable preview inbox URLs.

---

## Directory Architecture

```text
├── backend/                  # Node.js + Express API
│   ├── .env.example          # Environment variable template
│   ├── messages_db.json      # Local JSON file database (generated on submission fallback)
│   ├── package.json          # Backend npm requirements
│   └── server.js             # Express application & mail routing
│
├── frontend/                 # React.js + Vite Application
│   ├── public/               # Public assets
│   ├── src/
│   │   ├── components/       # Layout Sections (Hero, About, Projects, Contact, etc.)
│   │   ├── App.jsx           # Main coordinator and theme manager
│   │   ├── index.css         # Styling system core & custom keyframes
│   │   └── main.jsx          # React renderer
│   ├── index.html            # Core page and SEO configurations
│   ├── package.json          # Frontend npm requirements
│   └── vite.config.js        # Vite compilation rules
│
├── package.json              # Root dev-manager
└── README.md                 # Setup & running instructions
```

---

## Installation & Running Locally

Ensure you have [Node.js](https://nodejs.org) installed.

### Step 1: Install Dependencies
Open your terminal in the root project folder and run:
```bash
# This installs dependencies for the root, frontend, and backend projects
npm run install:all
```

### Step 2: Configure Backend Environment (Optional)
If you want to receive actual email alerts or write to a live MongoDB cluster, navigate to the `backend/` folder:
1. Copy `.env.example` to a new file named `.env`.
2. Update the credentials inside (MongoDB connection string and SMTP details).

*If you do not configure this, the server will function automatically using Ethereal sandbox email preview URLs and write messages to `backend/messages_db.json`.*

### Step 3: Launch Frontend & Backend Development Servers
From the root directory, start both systems concurrently:
```bash
npm run dev
```

- **Frontend website** will load at: `http://localhost:5173`
- **Backend API server** will start on: `http://localhost:5000`

---

## Verification & Testing

1. Fill in the contact form with valid inputs.
2. Submit the form. You will see a loading spinner, then a success banner accompanied by confetti.
3. Check the terminal server logs to see the email preview link and the database insertion status.
