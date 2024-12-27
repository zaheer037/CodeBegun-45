import React, { useState, useEffect } from "react";
import "./UserQuiz.css";

const UserQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("quiz"));
    if (savedQuiz) {
      setQuiz(savedQuiz);
    } else {
      alert("No published quiz available.");
    }
  }, []);

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let calculatedScore = 0;

    // Calculate score by comparing answers with correct answers
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    alert(`Quiz submitted! Your score: ${calculatedScore}/${quiz.numQuestions}`);
    localStorage.setItem("submittedAnswers", JSON.stringify(answers));
  };

  if (!quiz || !quiz.questions?.length) return <p>Loading quiz...</p>;

  return (
    <div className="quiz-container">
      <h2 className="text-center mb-4">{quiz.quizName}</h2>
      <p className="text-muted">Total Questions: {quiz.numQuestions}</p>

      {quiz.questions.map((q) => (
        <div key={q.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Question {q.id}</h5>
            <p className="card-text">{q.questionText}</p>
            {q.type === "MCQ" ? (
              q.options.map((option, index) => (
                <div key={index} className="form-check">
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
                placeholder="Type your answer here"
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                disabled={isSubmitted}
              />
            )}
          </div>
        </div>
      ))}

      {!isSubmitted ? (
        <button className="btn btn-primary btn-block mt-4" onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <div className="mt-4">
          <p className="text-success">Your answers have been submitted. Thank you!</p>
          <h3>Your Score: {score}/{quiz.numQuestions} ({((score / quiz.numQuestions) * 100).toFixed(2)}%)</h3>
          <ul>
            {quiz.questions.map((q) => (
              <li key={q.id}>
                <strong>{q.questionText}</strong>
                <br />
                <em>Your answer: {answers[q.id]}</em>
                <br />
                <span>
                  Correct answer: {q.correctAnswer}
                </span>
                <br />
                <span
                  className={
                    answers[q.id] === q.correctAnswer ? "text-success" : "text-danger"
                  }
                >
                  {answers[q.id] === q.correctAnswer ? "Correct" : "Incorrect"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserQuiz;
