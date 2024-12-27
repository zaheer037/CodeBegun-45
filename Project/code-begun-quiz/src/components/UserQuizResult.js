import React, { useEffect, useState } from "react";

const UserQuizResult = () => {
  const [submittedAnswers, setSubmittedAnswers] = useState(null);
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("submittedAnswers"));
    const quizData = JSON.parse(localStorage.getItem("quiz"));
    if (answers && quizData) {
      setSubmittedAnswers(answers);
      setQuiz(quizData);
    }
  }, []);

  if (!quiz || !submittedAnswers) {
    return <p>No quiz results to display.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>{quiz.quizName} - Results</h2>
      <div className="list-group">
        {quiz.questions.map((q) => (
          <div key={q.id} className="list-group-item">
            <h5>Question {q.id}</h5>
            <p>{q.questionText}</p>
            <p>
              <strong>Your Answer:</strong>{" "}
              {submittedAnswers[q.id] || "No answer provided"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuizResult;
