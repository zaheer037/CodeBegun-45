import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container mt-5 text-center">
      <h2>Admin Dashboard</h2>
      <div className="mt-4">
        <button className="btn btn-primary me-3" onClick={handleCreateUser}>
          Create User
        </button>
        <button
          className="btn btn-secondary me-3"
          onClick={handleCreateQuiz}
          disabled={!usersExist}
        >
          Create Quiz
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {!usersExist && (
        <p className="text-muted mt-3">Add users before creating a quiz.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
