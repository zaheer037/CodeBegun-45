import React from "react";

const AdminDashboard = ({ onCreateUser, onCreateQuiz, onLogout }) => {
  const usersExist = JSON.parse(localStorage.getItem("users"))?.length > 0;

  return (
    <div className="container mt-5 text-center">
      <h2>Admin Dashboard</h2>
      <div className="mt-4">
        <button className="btn btn-primary me-3" onClick={onCreateUser}>
          Create User
        </button>
        <button
          className="btn btn-secondary me-3"
          onClick={onCreateQuiz}
          disabled={!usersExist}
        >
          Create Quiz
        </button>
        <button className="btn btn-danger" onClick={onLogout}>
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
