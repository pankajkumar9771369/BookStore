Bookstore is a web-based platform where users can browse, purchase, and manage books. The project follows a MERN (MongoDB, Express, React, Node.js) stack architecture.

Bookstore/
│── backend/        # Node.js + Express backend
│── frontend/       # React + Vite frontend
│── README.md       # Project documentation
│── .gitignore      # Git ignore file

  Technologies Used
Backend (Node.js + Express + MongoDB)
Express.js – Fast and minimal web framework
MongoDB + Mongoose – Database and ORM
JWT (jsonwebtoken) – Authentication & security
Bcrypt – Password hashing
CORS & Dotenv – Configuration and security
Frontend (React + Vite + Tailwind CSS)
React.js – UI framework
React Router – Navigation
Redux Toolkit – State management
Axios – API calls
Tailwind CSS – Styling
Chart.js + React-Chartjs-2 – Data visualization
SweetAlert2 – Popups & notifications


Installation & Setup
Clone the Repository
git clone https://github.com/pankajkumar9771369/BookStore.git
cd Bookstore


Setup Backend
cd backend
npm install  # Install dependencies
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the backend:
   npm start


 Setup Frontend
cd ../frontend
npm install  # Install dependencies
Run the frontend: 
   npm start


   
API Endpoints (Backend)

Endpoint	Method	Description
/api/books	GET	Get all books
/api/books	POST	Add a new book
/api/users	POST	Register a new user
/api/auth	POST	User login (JWT)


Features
✅ User authentication (Signup/Login)
✅ Browse and search books
✅ Add books to favorites
✅ Responsive design
