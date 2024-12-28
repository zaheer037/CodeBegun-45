import React, { useState } from 'react';
import { BrowserRouter as Router, useRoutes, useNavigate } from 'react-router-dom';
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserManagement from "./components/UserManagement";
import QuizCreation from "./components/QuizCreation";
import UserQuiz from "./components/UserQuiz";
import UserQuizResult from "./components/UserQuizResult";

// Routes for Admin and User Views
const App = () => {
  const [role, setRole] = useState(""); // Store the role
  const navigate = useNavigate(); // Navigation function

  const handleLogin = (loggedInRole) => {
    setRole(loggedInRole);
    loggedInRole === "admin" ? navigate("/dashboard") : navigate("/userQuiz");
  };

  // Admin Routes
  const adminRoutes = [
    { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/admin/userManagement", element: <UserManagement /> },
    { path: "/admin/quizCreation", element: <QuizCreation /> },
  ];

  // User Routes
  const userRoutes = [
    { path: "/userQuiz", element: <UserQuiz /> },
    { path: "/user/QuizResult", element: <UserQuizResult /> },
  ];

  // Set the routes dynamically based on the role
  const routes = useRoutes([
    { path: '/', element: <Login onLogin={handleLogin} /> },
    ...role === 'admin' ? adminRoutes : userRoutes,  // Choose routes based on role
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
