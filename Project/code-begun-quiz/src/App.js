import React, { useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserManagement from "./components/UserManagement";
import QuizCreation from "./components/QuizCreation";
import UserQuiz from "./components/UserQuiz";
import UserQuizResult from "./components/UserQuizResult";

const App = () => {
  const [role, setRole] = useState("");
  const [currentView, setCurrentView] = useState("dashboard");

  const handleLogin = (loggedInRole) => {
    setRole(loggedInRole);
    setCurrentView(loggedInRole === "admin" ? "dashboard" : "userQuiz");
  };

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      {role === "" ? (
        <Login onLogin={handleLogin} />
      ) : role === "admin" ? (
        <div>
          {currentView === "dashboard" && (
            <AdminDashboard
              onCreateUser={() => navigateTo("userManagement")}
              onCreateQuiz={() => navigateTo("quizCreation")}
            />
          )}
          {currentView === "userManagement" && <UserManagement />}
          {currentView === "quizCreation" && <QuizCreation />}
          <button
            className="btn btn-secondary mt-3"
            onClick={() => navigateTo("dashboard")}
          >
            Back to Dashboard
          </button>
        </div>
      ) : (
        <div>
          {currentView === "userQuiz" && (
            <UserQuiz onFinishQuiz={() => navigateTo("userQuizResult")} />
          )}
          {currentView === "userQuizResult" && <UserQuizResult />}
        </div>
      )}
    </div>
  );
};

export default App;
