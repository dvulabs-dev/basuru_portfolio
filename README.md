# 🚀 Basuru's Portfolio

A full-stack personal portfolio website built with **React + Vite** on the frontend and **Express + MongoDB** on the backend. Features a hidden admin dashboard for managing projects, certificates, and courses — all with Cloudinary image uploads.

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS        |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Atlas) + Mongoose          |
| Images     | Cloudinary + Multer                 |
| Routing    | React Router DOM                    |
| HTTP       | Axios                               |
| Dev Tools  | Nodemon, Concurrently               |

---

## 📁 Project Structure

```
basuru_portfolio/
│
├── backend/                     # Express backend
│   ├── config/
│   │   ├── db.js                # MongoDB connection
│   │   └── cloudinary.js        # Cloudinary + Multer config
│   ├── models/
│   │   ├── Project.js           # Project schema
│   │   ├── Certificate.js       # Certificate schema (with type: certificate | scholarship)
│   │   └── Course.js            # Course schema
│   ├── routes/
│   │   ├── projects.js          # CRUD routes for projects
│   │   ├── certificates.js      # CRUD routes for certificates
│   │   ├── courses.js           # CRUD routes for courses
│   │   └── upload.js            # Image upload route (Cloudinary)
│   └── server.js                # Main Express server
│
├── src/                         # React frontend
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx         # Fetches projects from API
│   │   ├── Certificates.jsx     # Fetches certs with filter (All / Certificates / Scholarships)
│   │   ├── Courses.jsx          # Fetches courses from API
│   │   ├── About.jsx
│   │   ├── Countdown.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── AdminDashboard.jsx   # Admin panel (URL-protected)
│   ├── App.jsx                  # Route definitions
│   ├── main.jsx
│   └── index.css
│
├── public/                      # Static assets
├── .env                         # Environment variables (not committed)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/basuru_portfolio.git
cd basuru_portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> **MongoDB Atlas:** Get your connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  
> **Cloudinary:** Get your credentials from [Cloudinary Dashboard](https://cloudinary.com/).

---

## 🚀 Running the App

### Development (Frontend + Backend simultaneously)

```bash
npm run dev
```

This runs:
- **React frontend** on `http://localhost:5173`
- **Express backend** on `http://localhost:5000`

### Production Build

```bash
npm run build        # Build the React app
npm run start        # Serve using Express
```

---

## 🔐 Admin Dashboard

The admin dashboard is accessible via a **direct URL** — it is not linked anywhere on the portfolio.

```
http://localhost:5173/admin
```

### Features:
- 📁 **Projects** — Upload title, description, image, and project link
- 🏅 **Certificates** — Upload with type: `Certificate` or `Scholarship`
- 📚 **Courses** — Upload title, description, image, and course link
- 🗑️ **Delete** items directly from the list
- 🖼️ **Drag & Drop** image upload with live preview
- ☁️ All images are uploaded to **Cloudinary**

---

## 🌐 API Endpoints

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/api/projects`           | Get all projects          |
| POST   | `/api/projects`           | Add a project             |
| DELETE | `/api/projects/:id`       | Delete a project          |
| GET    | `/api/certificates`       | Get all certificates      |
| POST   | `/api/certificates`       | Add a certificate         |
| DELETE | `/api/certificates/:id`   | Delete a certificate      |
| GET    | `/api/courses`            | Get all courses           |
| POST   | `/api/courses`            | Add a course              |
| DELETE | `/api/courses/:id`        | Delete a course           |
| POST   | `/api/upload`             | Upload image to Cloudinary|

---

## 📦 Deployment

For deployment (e.g., Render, Railway, or VPS):

1. Set `NODE_ENV=production` in your environment variables.
2. Run `npm run build` to generate the `dist/` folder.
3. The Express server will automatically serve the React build.
4. Make sure all `.env` variables are set in your hosting platform.

---

## 📄 License

MIT © Basuru