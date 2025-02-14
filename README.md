📌 SOCIAL EVENT PLANNER
A full-stack event management platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to create, manage, and join social events effortlessly.

🌟 Features
✅ User Authentication (Sign Up/Login)
✅ Event Creation & Management (Create, Edit, Delete)
✅ Event Listings with filters and search
✅ RSVP System (Users can register for events)
✅ Admin Dashboard for event moderation
✅ Real-time Notifications (using WebSockets)
✅ Responsive UI with Material-UI (MUI)

🛠 Tech Stack
Frontend:
- React.js (Vite for fast development)
- Material-UI (MUI) for styling
- Redux Toolkit for state management
Backend:
- Node.js & Express.js for API
- MongoDB & Mongoose for database
- JWT (JSON Web Tokens) for authentication
Other Tools:
- Socket.io for real-time updates
- Cloudinary for image storage
- Nodemailer for email notifications

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/social-event-planner.git
cd social-event-planner

2️⃣ Setup Backend
cd backend
npm install

🔹 Create a .env file inside backend/ and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

🔹 Run the backend server:

npm start
It should run on http://localhost:5000

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev

Frontend will run on http://localhost:5173 🚀

📂 Project Structure

/social-event-planner
│── backend
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── app.js
│
│── frontend
│   ├── src/
│   ├── public/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.html

📧 Contact
📌 Author: Saran Shabu
📌 Email: saranshabul@gmail.com
📌 GitHub: TwistedWizard



