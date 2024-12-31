import React, { useState } from "react";
import "./Login.css"; // Separate CSS file for enhanced styling
import loginIllustration from "../assets/mobile.avif"; // Add a custom illustration

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const adminCredentials = { username: "admin", password: "admin" };

    if (!username || !password) {
      setError("Both fields are required!");
      return;
    }

    if (username === adminCredentials.username && password === adminCredentials.password) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", username: adminCredentials.username })
      );
      onLogin("admin");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(userExists));
      onLogin("user");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-illustration">
          <img src={loginIllustration} alt="Login Illustration" />
        </div>
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please login to continue</p>
        <div className="login-form">
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button className="btn-primary login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;