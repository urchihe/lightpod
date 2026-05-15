# LightLounge

Full-stack web application with a Next.js frontend and an Express.js backend, deployed via GitHub Actions CI/CD to a VPS.

---

## Project Structure

```
LightLounge/
├── .github/
│   └── workflows/
│       ├── backend.yml       # Backend CI/CD pipeline
│       └── frontend.yml      # Frontend CI/CD pipeline
│
├── backend/
│   ├── src/
│   │   └── index.js          # Express app entry point
│   ├── eslint.config.mjs
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── public/               # Static assets
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## Tech Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS  |
| Backend  | Node.js, Express 5, dotenv, cors                |
| Forms    | React Hook Form, Zod                            |
| Data     | TanStack React Query, Axios                     |
| UI       | shadcn/ui                                       |
| Infra    | GitHub Actions, PM2, VPS (SSH deploy)           |

---

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev       # starts with nodemon on port 5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev       # starts Next.js dev server
```

---

## API Endpoints

| Method | Path         | Description            |
| ------ | ------------ | ---------------------- |
| GET    | `/`          | Health check           |
| GET    | `/api/status`| System status + uptime |

---

## CI/CD

Both pipelines run on push to `main`. Each runs a quality-check job (lint + build) before deploying to the VPS via SSH. Deployment is currently disabled.
