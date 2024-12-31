import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserQuiz.css";

const UserQuiz = () => {
  const [questions, setQuestions] = useState([]); // Store all questions here
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  // Retrieve the logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Handle case where no logged-in user is found
  if (!loggedInUser) {
    alert("No logged-in user found. Please log in first.");
  }

  const username = loggedInUser?.username;

  // Load quizzes assigned to the logged-in user
  useEffect(() => {
    if (!username) {
      alert("No username provided.");
      return;
    }

    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    const userQuizzes = quizzes.filter((quiz) => quiz.assignedTo === username);

    if (userQuizzes.length > 0) {
      const allQuestions = userQuizzes.flatMap((quiz) => quiz.questions);
      setQuestions(allQuestions);
    } else {
      alert("No quizzes available for you.");
    }
  }, [username]);

  // Handle answer changes
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers, // Keep existing answers
      [questionId]: value, // Update only the current question's answer
    }));
  };

  // Handle quiz submission
  const handleSubmit = () => {
    setIsSubmitted(true);
    let calculatedScore = 0;

    // Calculate score by comparing answers with correct answers
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    alert(`Quiz submitted! Your score: ${calculatedScore}/${questions.length}`);
    localStorage.setItem("submittedAnswers", JSON.stringify(answers));
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/"); // Redirect to login page
  };

  // Show loading if questions are not loaded yet
  if (questions.length === 0) return <p>Loading quiz...</p>;

  return (
    <div className="quiz-container">
      <h2 className="text-center mb-4">Your Quiz</h2>
      <p className="text-muted">Total Questions: {questions.length}</p>

      {questions.map((q, index) => (
        <div key={q.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Question {index + 1}</h5>
            <p className="card-text">{q.questionText}</p>
            {q.type === "MCQ" ? (
              q.options.map((option, optIndex) => (
                <div key={optIndex} className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name={`question-${q.id}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    checked={answers[q.id] === option}
                    disabled={isSubmitted}
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder={`Answer the Question here`}
                value={answers[q.id] || ""} // Dynamically set value from the state
                onChange={(e) => handleAnswerChange(q.id, e.target.value)} // Update specific question's answer
                disabled={isSubmitted}
              />
            )}
          </div>
        </div>
      ))}

      {!isSubmitted ? (
        <button
          className="btn btn-primary btn-block m-4 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <div className="mt-4">
          <p className="text-success">
            Your answers have been submitted. Thank you!
          </p>
          <h3>
            Your Score: {score}/{questions.length} (
            {((score / questions.length) * 100).toFixed(2)}%)
          </h3>
          <ul>
            {questions.map((q) => (
              <li key={q.id}>
                <strong>{q.questionText}</strong>
                <br />
                <em>Your answer: {answers[q.id]}</em>
                <br />
                <span>Correct answer: {q.correctAnswer}</span>
                <br />
                <span
                  className={
                    answers[q.id] === q.correctAnswer
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {answers[q.id] === q.correctAnswer ? "Correct" : "Incorrect"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="btn btn-danger btn-block m-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserQuiz;
