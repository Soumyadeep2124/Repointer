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

## Live Deployed Link: https://repointer-client.onrender.com

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






{
    "title": "Find Maximum in stack",
    "description": "Write a program that takes an array of integers and returns the maximum value.",
    "difficulty": "easy",
    "tags": "array",
    "visibleTestCases": [
        {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "The maximum value among 1 2 3 4 5 is 5"
        },
        {
            "input": "6\n-2 -1 0 -5 3 2",
            "output": "3",
            "explanation": "3 is the highest number"
        }
    ],
    "hiddenTestCases": [
        {
            "input": "4\n100 250 199 300",
            "output": "300"
        },
        {
            "input": "3\n-100 -300 -50",
            "output": "-50"
        }
    ],
    "startCode": [
        {
            "language": "C++",
            "initialCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    // Read n and array\n    // Output the maximum number\n    return 0;\n}"
        },
        {
            "language": "Java",
            "initialCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Read input and find maximum\n    }\n}"
        },
        {
            "language": "JavaScript",
            "initialCode": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\n\n// Process input and print maximum"
        }
    ],
    "referenceSolution": [
        {
            "language": "C++",
            "completeCode": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int maxVal = -2147483647 - 1; ;\n  int x;\n   for(int i = 0; i < n; i++) {\n        cin >> x;\n        if(x > maxVal) maxVal = x;\n    }\n    cout << maxVal;\n    return 0;\n}"
        },
        {
            "language": "Java",
            "completeCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int max = Integer.MIN_VALUE;\n        for(int i = 0; i < n; i++) {\n            int x = sc.nextInt();\n            if(x > max) max = x;\n        }\n        System.out.println(max);\n    }\n}"
        },
        {
            "language": "JavaScript",
            "completeCode": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = Number(input[0]);\nconst arr = input[1].split(' ').map(Number);\nconsole.log(Math.max(...arr));"
        }
    ]
}