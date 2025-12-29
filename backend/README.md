# AI Interview Platform - Backend

This is the backend for the AI Interview Platform, built with Node.js and Express.

## Structure

- `controllers/`: Request handlers
- `routes/`: API route definitions
- `models/`: Database models
- `services/`: Business logic and external API calls
- `config/`: Configuration files
- `middleware/`: Custom middleware (auth, error handling)
- `app.js`: Application entry point

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Variables:
   Copy `.env.example` to `.env` and configure your variables.
   ```bash
   cp .env.example .env
   ```

3. Run Development Server:
   ```bash
   npm run dev
   ```

4. Run Production Server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /`: Health check

## Developer Guide

- **Branching**: Work on the `backend` branch.
- **Code Style**: Follow standard JavaScript/Node.js conventions.
