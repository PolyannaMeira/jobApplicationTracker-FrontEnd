# Job Application Tracker - Frontend

This is the **frontend** for the **Job Application Tracker**, a tool designed to help users organize and manage their job applications. Users can register, log in, and track applications, interview dates, notes, and more through a user-friendly interface.

Built with **React**, the frontend communicates with a secure **Express.js** and **PostgreSQL** backend using **JWT** authentication.

> ✨ This project was developed as a **group project** with contributions from @khantm02, @hitomipupil, @edinssa, @stefan-000, and @PolyannaMeira, as part of the **final assessment** for the **Full Stack Developer** course at **Hack Your Future Belgium**.

## Features

* User login and registration
* JWT-based authentication
* Create, read, update, and delete job applications
* Calendar view of interview dates
* Profile page with editable details and password change
* Responsive UI for desktop and mobile

## Tech Stack

* **React** (with Hooks)
* **React Router** for navigation
* **Fetch API** for backend integration
* **CSS** with mobile-first responsive design
* **React Calendar** for agenda view

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PolyannaMeira/Job-Application-Tracker-FE
cd Job-Application-Tracker-FE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file with the backend URL:

```env
VITE_APP_API_URL=http://localhost:5000/
```

### 4. Start the development server

```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/              # Main views (Login, Profile, Jobs, etc.)
├── api/                # API logic (token management, fetch wrappers)
├── styles/             # CSS files for layout and responsiveness
├── App.jsx             # Root component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Available Routes

* `/` – Home page
* `/login` – Login form
* `/signup` – User registration
* `/myjobs` – List of job applications
* `/myjob/:id` – View job details
* `/update/:id` – Edit job details
* `/cagenda` – Agenda view for interview dates
* `/account-details` – Edit profile and change password

## Calendar View

The agenda view allows users to see interviews scheduled for each month. Highlighted dates help visualize job search activity and upcoming deadlines.

## Authentication

* Tokens are stored in localStorage
* All protected requests include the token in the `Authorization` header
* Routes redirect unauthenticated users to the login page

## Acknowledgements

* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [React Calendar](https://www.npmjs.com/package/react-calendar)
* [Hack Your Future Belgium](https://hackyourfuture.be/)

---

This frontend works together with the backend repository: [`job-application-tracker`](https://github.com/PolyannaMeira/Job-Application-Tracker-BE).
