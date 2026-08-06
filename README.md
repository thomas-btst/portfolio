# Portfolio - Thomas BATISTA

[![Website](https://img.shields.io/badge/Website-thomas--batista.fr-007ACC?style=for-the-badge&logo=googlechrome&logoColor=white)](https://thomas-batista.fr)

Welcome to my personal portfolio repository, built with **React**, **TypeScript**, and **Vite**.

This website showcases my background, technical skills, completed projects, and includes a secure contact form.

## Table of Contents

1. [Technologies](#technologies)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Code Quality & Linting](#code-quality--linting)
5. [Project Structure](#project-structure)
6. [Author](#author)
7. [License](#license)

## Technologies

- **Frontend**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [SASS](https://sass-lang.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Forms**: [@formspree/react](https://formspree.io/)
- **Security**: [react-google-recaptcha](https://www.google.com/recaptcha/)
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Features

- **Home / Profile**: Overview of profile and core competencies.
- **Career / Education**: Timeline of academic background and work experience.
- **Projects**: Showcase of projects with descriptions and associated skills.
- **Technologies**: Highlights of technical skills and tools mastered.
- **Contact**: Functional contact form powered by Formspree with ReCAPTCHA integration.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/thomas-btst/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables Setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then fill in your API keys in the `.env` file:

```env
VITE_FORMSPREE_KEY=your_formspree_key
VITE_RECAPTCHA_PUBLIC_KEY=your_recaptcha_public_key
```

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Code Quality & Linting

This project uses **ESLint** integrated with **Prettier** to maintain high code quality and consistency:

- **ESLint**: Enforces TypeScript type-safety rules, React Hooks guidelines, and React Refresh rules.
- **Prettier**: Formats code automatically (single quotes, 2 spaces indentation, no semicolons, 120 print width).

To check code quality and automatically apply formatting fixes across the project, run:

```bash
npm run lint
```

## Project Structure

```text
portfolio/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── assets/          # Media resources and images
│   ├── components/      # Reusable UI components (Navbar, Footer...)
│   ├── constants/       # Static data (career history, projects, skills...)
│   ├── contexts/        # React contexts
│   ├── features/        # Feature-specific modules (contact form...)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page views (Home, Career, Projects, Contact...)
│   ├── App.tsx          # Application router setup
│   └── main.tsx         # Application entry point
├── .env.example         # Environment variables template
├── vercel.json          # Vercel deployment configuration
└── vite.config.ts       # Vite configuration
```

## Author

**Name** : Thomas BATISTA  
**Website** : [thomas-batista.fr](https://thomas-batista.fr)

## License

© Thomas BATISTA. All rights reserved.
