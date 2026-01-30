MERN E-Learning Platform 🎓

A full-stack E-Learning Platform built using the MERN stack that allows users to register, browse courses, enroll, watch lectures, and make secure payments. The platform also includes instructor/admin features for managing courses and content.

⸻

📌 Table of Contents
	•	Features
	•	Tech Stack
	•	Project Structure
	•	Installation & Setup
	•	Environment Variables
	•	Running the Application
	•	Future Enhancements
	•	Contributing
	•	License

⸻

🚀 Features

👤 User Features
	•	User registration & login (JWT authentication)
	•	Browse available courses
	•	Enroll in courses
	•	Watch lectures
	•	Secure payment integration
	•	Track enrolled courses

🧑‍🏫 Instructor / Admin Features
	•	Create & manage courses
	•	Upload and manage lectures
	•	View enrolled users
	•	Admin dashboard access

⸻

🛠 Tech Stack

Frontend
	•	React.js (Vite)
	•	Axios
	•	React Router DOM
	•	Context API / Hooks

Backend
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	JWT Authentication

⸻

📁 Project Structure
mern-e-learning-platform/
├── frontend/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .gitignore
├── README.md
└── package.json

⚙️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/your-username/mern-e-learning-platform.git
cd mern-e-learning-platform

2️⃣ Backend Setup
cd server
npm install

🔐 Environment Variables

Create a .env file inside the server/ directory.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

🔮 Future Enhancements
	•	Role-based access control
	•	Course ratings & reviews
	•	Certificate generation
	•	Video progress tracking
	•	Email notifications
	•	Live classes integration

⸻
hello

🤝 Contributing

Contributions are welcome.
Fork the repository and submit a pull request for improvements.
