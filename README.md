# AppDost - Complete IT Solution

AppDost is a modern, high-performance digital transformation platform built using **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. It features rich design aesthetics, smooth micro-animations, a friendly support chatbot, and a custom welcome/onboarding splash screen.

## ✨ Features

- **🚀 Premium Responsive Landing Page**: Stunning layout highlighting core services, values, client stats, and featured projects.
- **🎨 Modern Glassmorphism Design**: Elegant dark-mode layout with floating background gradients, blur effects, hover state enhancements, and smooth transitions.
- **🤖 Support Chatbot (`HelpingBot`)**: Floating interactive bot component providing helpful guidance and simulate messaging.
- **✨ Onboarding Animation (`WelcomeAnimation`)**: Creative, animated welcome splash screen that fades out to reveal the homepage.
- **📂 Component Architecture**: Equipped with a full suite of custom-styled Radix UI primitives and shadcn components.
- **📈 Tech Stack Showcase**: Highlighting proficiency in React, Node.js, Python, MongoDB, AWS, Docker, Kotlin, and TypeScript.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: Radix UI (Accordion, Dialog, Drawer, Dropdown Menu, Popover, Select, etc.)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** installed (v18.x or later is recommended).

### 1. Clone the repository & navigate to the project
```bash
git clone git@github.com:SAHIL-4112004/AppDost-Assignment.git
cd AppDost-Assignment
```

### 2. Install Dependencies
Since React 19 is used alongside libraries requiring legacy peer dependency resolution, install using:
```bash
npm install --legacy-peer-deps
```

### 3. Run the Development Server
Launch the development server with Next.js Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To build a production-ready bundle of the application:
```bash
npm run build
```

---

## 📁 Directory Structure

```text
├── app/                  # Next.js App Router pages and global layouts
│   ├── globals.css       # Global styles with Tailwind configurations & animations
│   ├── layout.tsx        # Base root layout
│   └── page.tsx          # Main landing page template
├── components/           # Custom React components
│   ├── ui/               # Modular shadcn UI components (Buttons, Dialogs, Cards, etc.)
│   ├── helping-bot.tsx   # Interactive floating helper bot
│   ├── welcome-animation.tsx # Welcome screen intro animation
│   └── theme-provider.tsx    # Light/Dark mode theme provider
├── hooks/                # Custom React hooks (e.g. use-mobile, use-toast)
├── lib/                  # Helper functions and utilities (e.g. cn)
├── public/               # Static assets (images, icons, vectors)
└── package.json          # Project metadata and dependencies
```

---

## 📝 License

Developed with ❤️ in India by **AppDost**. All rights reserved.
