# REPOINTER: All-in-One Platform for Learning and Coding

![Frontend](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)
![Backend](https://img.shields.io/badge/Backend-Express.js-yellow?style=flat-square)
![Database](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square)
![Deployment](https://img.shields.io/badge/Deployed-Vercel%20%7C%20Render-black?style=flat-square)


## About the Project

**REPOINTER** is an interactive coding education platform for developers and students. It provides an all-in-one environment to learn, visualize, practice, and interact with coding concepts.

Main features include:

* Interactive Courses
* DSA Visualizer
* Coding Problem Arena
* AI Assistant 
* Tech Blogs and Updates


---

## Screenshots

| Home Page                                             | Coding Page                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| ![Home Screenshot](./docs/screenshots/Homepage.png)<br><br><strong>Landing page introducing the entire platform and guiding users to key features like courses, coding arena, and visualizer.</strong> | ![Coding page Screenshot](./docs/screenshots/Coding.png)<br><br><strong>Full-featured coding interface to write, test, and submit solutions with support from Judge0 API.</strong> |

<br><br>

| DSA Visualizer Page                                   | Courses Page                                                |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| ![DSA Screenshot](./docs/screenshots/Dsa.png)<br><br><strong>Step-by-step animated DSA visualizations to intuitively understand algorithms like sorting and searching.</strong> | ![Courses Screenshot](./docs/screenshots/Courses.png)<br><br><strong>Organized and modular course interface to learn HTML, CSS, and more with progress tracking.</strong> |

<br><br>

| Admin Dashboard                                       | User Dashboard                                              |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| ![User Screenshot](./docs/screenshots/Admin.png)<br><br><strong>Powerful admin control panel to manage users, problems, courses, and submissions across the platform.</strong> | ![Admin Screenshot](./docs/screenshots/User.png)<br><br><strong>User-centric dashboard showing performance metrics, completed modules, streaks, and solved problems.</strong> |



---



## Project Structure

```bash
CODEHUB/
├── client/           # (Frontend) React + Vite frontend
├── backend/          # (Backend) Express.js backend with REST APIs
├── screenshots/      # UI images for README
├── .gitignore
├── .env.example
└── README.md
```

---

## Features

* Modular courses with Practice Session and Quizes
* DSA visualizations for sorting, searching, and graph algorithms
* Code playground with Judge0 API integration
* AI assistant using Gemini API for code and concept explanation
* Cloudinary integration for image handling
* JWT authentication and Redis-based session caching

---

## Tech Stack

| Layer      | Technologies                        |
| ---------- | ----------------------------------- |
| Frontend   | React, Vite, TailwindCSS            |
| Backend    | Node.js, Express.js, JWT, Redis     |
| Database   | MongoDB (MongoDB Atlas)             |
| APIs       | Judge0, Gemini, Cloudinary          |
| Deployment | Vercel (frontend), Render (backend) |

---

## Local Setup

### Prerequisites

* Node.js v16 or later
* Git
* MongoDB Atlas account
* Cloudinary, Judge0, and Gemini API Keys

### Clone the Repository

```bash
git clone https://github.com/your-username/repointer.git
cd repointer
```

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Fill in your actual keys and values
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`
The backend runs at `http://localhost:5000`

---

## API Endpoints

```http
GET    /api/courses
GET    /api/problems
POST   /api/submit-code
POST   /api/ask-ai
```

---

## Frontend Routes

```
/                    -> Home
/courses             -> Course Listing
/courses/:id         -> Course Details & Chapters
/arena               -> Code Problem Arena
/visualizer          -> DSA Visualizer
/ask-ai              -> AI Assistant
```

---

## Environment Variables (`.env.example`)

```env
PORT=5000
DB_CONNECT_STRING=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_KEY=your-jwt-secret
REDIS_PASS=your-redis-password
JUDGE0_KEY=your-judge0-api-key
GEMINI_KEY=your-gemini-api-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
CLOUDINARY_URL=cloudinary://...
```

---

## Contributing

To contribute:

```bash
# Fork the repository
# Create a new feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Commit and push
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Then open a pull request for review.

---

## Contact

**Author**: Soumyadeep Bhowmik
[LinkedIn](https://www.linkedin.com/in/soumyadeep2124)
[mrbhowmik2124@gmail.com](mailto:mrbhowmik2124@gmailcom)

---

**Happy Coding!**






