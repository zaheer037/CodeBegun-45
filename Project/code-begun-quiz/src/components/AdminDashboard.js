import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css"; // Import the CSS file

const AdminDashboard = () => {
  const navigate = useNavigate();
  const usersExist = JSON.parse(localStorage.getItem("users"))?.length > 0;

  const handleCreateUser = () => {
    navigate("/admin/userManagement");
  };

  const handleCreateQuiz = () => {
    navigate("/admin/quizCreation");
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/"); // Navigate back to the home page or login page
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <div className="mt-4">
          <button className="btn btn-primary btn-user" onClick={handleCreateUser}>
            Create User
          </button>
          <button
            className="btn btn-secondary btn-create"
            onClick={handleCreateQuiz}
            disabled={!usersExist}
          >
            Create Quiz
          </button>
          <button className="btn btn-danger btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
        {!usersExist && (
          <p className="text-muted mt-3">Add users before creating a quiz.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;