# Full Stack Portfolio Website

This repository contains a modern personal portfolio built with React, Node.js, Express, and MongoDB.

## Project Structure

- `frontend/` - React application, UI, contact form, admin dashboard.
- `backend/` - Express API server, MongoDB models, authentication.

## Features

- Home page with hero section, typing animation, and profile card.
- About section with skills, education, and career objective.
- Projects section with cards, GitHub links, and live demo links.
- Contact form with MongoDB storage and EmailJS integration.
- Admin dashboard with login, add/edit/delete projects.
- Responsive dark theme, glassmorphism, hover animations, scroll to top.

## Getting Started

### 1. Setup MongoDB Atlas

1. Create a free MongoDB Atlas account.
2. Create a cluster and a database user.
3. Copy the connection string and replace `<password>` and `<dbname>`.

Example:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=supersecretkey
ADMIN_PASSWORD=Portfolio#123
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` with your MongoDB URI, JWT secret, and admin password.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
cp .env.example .env
```

Update `.env` with your backend URL and EmailJS keys.

### 4. Run Locally

```bash
cd backend
npm run dev
```

Open another terminal:

```bash
cd frontend
npm run dev
```

### 5. Admin Login

- Default admin username: `admin`
- Default admin password: value from `ADMIN_PASSWORD` in `backend/.env`

## Deployment Guide

### GitHub Upload

1. Initialize repository:

```bash
git init
git add .
git commit -m "Initial portfolio website"
```

2. Push to GitHub:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Vercel Deployment (Frontend)

1. Create a new Vercel project.
2. Link the `frontend` folder.
3. Set build command: `npm run build`.
4. Set output directory: `dist`.
5. Add environment variables:
   - `VITE_API_URL` = `https://<your-backend-url>`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Render / Railway Deployment (Backend)

1. Create a new service and link the `backend` folder.
2. Set start command: `npm run start` or `npm run dev`.
3. Add environment variables:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `ADMIN_PASSWORD`

### MongoDB Atlas Connection

1. Whitelist your IP or use `0.0.0.0/0` for development.
2. Create the `portfolio` database.
3. Use the `MONGO_URI` in the backend `.env`.

## Notes

- Use reusable React components in `frontend/src/components`.
- Backend API endpoints are defined in `backend/routes`.
- Keep the code clean and beginner friendly.
