import React, { useEffect, useState } from "react";

const UserQuizResult = () => {
  const [submittedAnswers, setSubmittedAnswers] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("submittedAnswers"));
    const quizData = JSON.parse(localStorage.getItem("quizzes"));
    if (answers && quizData) {
      setSubmittedAnswers(answers);
      setQuiz(quizData);
    }
  }, []);

  const calculateScore = () => {
    if (!quiz || !submittedAnswers) return;

    let totalScore = 0;
    quiz.questions.forEach((question) => {
      if (submittedAnswers[question.id] === question.correctAnswer) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
  };

  if (!quiz || !submittedAnswers) {
    return <p>No quiz results to display.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>{quiz.quizName} - Results</h2>
      <p>Score: {score}/{quiz.numQuestions}</p>
      
      <button className="btn btn-primary mb-4" onClick={calculateScore}>
        Calculate Score
      </button>

      <div className="list-group">
        {quiz.questions.map((q) => (
          <div key={q.id} className="list-group-item">
            <h5>Question {q.id}</h5>
            <p>{q.questionText}</p>
            <p>
              <strong>Your Answer:</strong>{" "}
              {submittedAnswers[q.id] || "No answer provided"}
            </p>
            <p>
              <strong>Correct Answer:</strong> {q.correctAnswer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuizResult;
