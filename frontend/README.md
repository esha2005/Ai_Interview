# AI Interview Platform - Frontend

This is the frontend for the AI Interview Platform, built with React and Vite.

## Structure

- `src/components/`: Reusable UI components
- `src/pages/`: Page components (routed views)
- `src/services/`: API services and utilities
- `src/styles/`: Global and component-specific styles

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Variables:
   Copy `.env.example` to `.env` (optional for defaults).
   ```bash
   cp .env.example .env
   ```

3. Run Development Server:
   ```bash
   npm run dev
   ```

4. Build for Production:
   ```bash
   npm run build
   ```

## Developer Guide

- **Branching**: Work on the `frontend` branch.
- **Styling**: CSS files are in `src/styles`.
- **API**: Use `src/services/api.js` for backend requests.
