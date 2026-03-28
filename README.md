# Portfolio
##  Engineering Portfolio (Static Template)

A modern, responsive portfolio template built with **Next.js** and **Framer Motion**, designed to showcase projects, skills, and personal information using simple JSON-based data.

---

## 🌐 Live Demo

👉 https://engineeringportfolio.netlify.app

---

## 🧠 Overview

This is a **lightweight, data-driven portfolio template** that allows you to manage content using JSON files instead of hardcoding UI.

It focuses on:

* ⚡ Performance
* 🎨 Clean UI/UX
* 🧩 Simplicity and reusability

---

## ✨ Features

* 📱 Fully responsive design
* 🌙 Dark / Light mode toggle
* 🎭 Smooth animations using Framer Motion
* 📦 JSON-based dynamic content
* 🔗 Conditional rendering for links
* ⚡ Static site generation for fast load times

---

## 📁 Project Structure

```bash
.
├── app/                # Next.js App Router pages
├── components/         # UI components
├── data/               # JSON data (user, projects)
├── public/             # Static assets
├── styles/             # Global styles
└── next.config.js
```

---

## 🧩 Data-Driven Approach

All content is managed via JSON files.

### Example: `data/user.json`

```json
{
  "name": "Your Name",
  "tagline": "Software Engineer",
  "github": "https://github.com/yourprofile",
  "linkedin": "",
  "link": "https://yourwebsite.com"
}
```

---

### Example: `data/projects.json`

```json
[
  {
    "id": 1,
    "name": "Project Alpha",
    "description": "A modern web application",
    "emoji": "🚀",
    "link": "https://example.com"
  }
]
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/imaketech1/portfolio.git
cd portfolio
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run locally

```bash
npm run dev
```

---

### 4. Build for production

```bash
npm run build
```

---

## ⚙️ Requirements

* Node.js **>= 20.9.0**
* npm / yarn / pnpm

---

## 💡 Customization

* Update JSON files inside `/data`
* Modify components in `/components`
* Adjust styles using Tailwind classes

---

## Author

Built by **imaketech**

* GitHub: https://github.com/imaketech1

---

## 📄 License

MIT License — free to use and modify.

---
