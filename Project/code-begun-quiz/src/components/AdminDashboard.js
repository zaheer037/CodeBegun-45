import React, { useState } from "react";
import QuizCreation from "./QuizCreation";
import UserManagement from "./UserManagement";

const AdminDashboard = () => {
  const [showQuizCreation, setShowQuizCreation] = useState(false);
  const [showUserManagement, setShowUserManagement] = useState(false);

  const handleCreateUser = () => {
    setShowUserManagement(true);
    setShowQuizCreation(false);
  };

  const handleCreateQuiz = () => {
    setShowQuizCreation(true);
    setShowUserManagement(false);
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <button className="btn btn-primary me-3" onClick={handleCreateUser}>
        Create User
      </button>
      <button
        className="btn btn-secondary"
        onClick={handleCreateQuiz}
        disabled={JSON.parse(localStorage.getItem("users"))?.length === 0}
      >
        Create Quiz
      </button>

      {showUserManagement && <UserManagement />}
      {showQuizCreation && <QuizCreation />}
    </div>
  );
};

export default AdminDashboard;
