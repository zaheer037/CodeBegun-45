import React from "react";
//import "./QuizPreview.css"; // Add a CSS file for consistent styling

const QuizPreview = ({ quiz, onBack }) => {
  if (!quiz || !quiz.questions?.length) {
    return <p>No quiz data available for preview.</p>;
  }

  return (
    <div className="quiz-container">
      <h2 className="text-center mb-4">Preview: {quiz.quizName}</h2>
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
                    disabled
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder="Type your answer here (disabled in preview)"
                disabled
              />
            )}
            <p className="text-success mt-2">
              <strong>Correct Answer:</strong> {q.correctAnswer}
            </p>
          </div>
        </div>
      ))}

      <button className="btn btn-secondary mt-4" onClick={onBack}>
        Back to Quiz Creation
      </button>
    </div>
  );
};

export default QuizPreview;
