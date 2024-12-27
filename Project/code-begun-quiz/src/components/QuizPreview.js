import React from "react";

const QuizPreview = ({ quiz }) => {
  return (
    <div className="container mt-5">
      <h2>Quiz Preview: {quiz.quizName}</h2>
      <p>Number of Questions: {quiz.numQuestions}</p>
      <div>
        {quiz.questions.map((q, index) => (
          <div key={index} className="mb-3">
            <h4>{q.questionText}</h4>
            {q.type === "MCQ" && (
              <ul>
                {q.options.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ul>
            )}
            <p>Correct Answer: {q.correctAnswer}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-primary" onClick={() => alert("Quiz Previewed!")}>
        Confirm Preview
      </button>
    </div>
  );
};

export default QuizPreview;
