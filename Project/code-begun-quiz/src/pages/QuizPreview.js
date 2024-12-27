import React from "react";

const QuizPreview = ({ quiz }) => {
  return (
    <div className="container mt-5">
      <h2>Quiz Preview: {quiz.quizName}</h2>
      <p>Total Questions: {quiz.numQuestions}</p>
      <div>
        {quiz.questions.map((q, index) => (
          <div key={index} className="mb-3">
            <h5>Question {index + 1}</h5>
            <p>{q.questionText}</p>
            {q.type === "MCQ" ? (
              <p>Type: Multiple Choice Question (MCQ)</p>
            ) : (
              <p>Type: Fill in the Blank (FIB)</p>
            )}
          </div>
        ))}
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default QuizPreview;
