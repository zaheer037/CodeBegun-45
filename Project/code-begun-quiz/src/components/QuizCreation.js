import React, { useState } from "react";
import QuizPreview from "./QuizPreview"; // Assuming this component displays the quiz preview

const QuizCreation = () => {
  const [quizName, setQuizName] = useState(""); // Store quiz name
  const [numQuestions, setNumQuestions] = useState(0); // Store number of questions
  const [questions, setQuestions] = useState([]); // Store the questions array
  const [previewMode, setPreviewMode] = useState(false); // Track preview mode state
  const [selectedUser, setSelectedUser] = useState(""); // Store the selected user

  // Fetch users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Handle number of questions change and generate that many empty questions
  const handleNumQuestionsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumQuestions(num);
  
    const newQuestions = [];
    for (let i = 0; i < num; i++) {
      newQuestions.push({
        id: `${Date.now()}-${i}`, // Unique ID generation
        type: "MCQ",
        questionText: "",
        options: ["", "", "", ""],
        correctAnswer: "",
      });
    }
    setQuestions(newQuestions);
  };
  

  // Handle changes in question details (text, type, options, etc.)
  const handleQuestionChange = (id, field, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, [field]: value } : q
      )
    );
  };

  // Save quiz data to localStorage
  const handleSave = () => {
    // const quizData = {
    //   quizName,
    //   numQuestions,
    //   questions,
    //   isPublished: false,
    //   assignedTo: selectedUser || null, // Associate user if selected
    // };

    //const existingQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    //localStorage.setItem("quizzes", JSON.stringify([...existingQuizzes, quizData]));
    alert("Quiz saved as a draft!");
  };

  // Switch to preview mode
  const handlePreview = () => {
    if (!quizName || questions.some((q) => !q.questionText)) {
      alert("Please fill out all fields before previewing.");
      return;
    }
    setPreviewMode(true);
  };

  const handleBackFromPreview = () => {
    setPreviewMode(false);
  };

  // Handle quiz publication
  const handlePublish = () => {
    if (!quizName || questions.some((q) => !q.questionText || !q.correctAnswer)) {
      alert("Please complete all fields before publishing.");
      return;
    }

    const quizData = {
      quizName,
      numQuestions,
      questions,
      isPublished: true,
      assignedTo: selectedUser || null, // Associate user if selected
    };

    const existingQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    localStorage.setItem("quizzes", JSON.stringify([...existingQuizzes, quizData]));
    alert("Quiz published successfully!");

    // Clear the form
    setQuizName("");
    setNumQuestions(1);
    setQuestions([]);
    setSelectedUser("");
    setPreviewMode(false);
  };

  return !previewMode ? (
    <div className="container mt-5">
      <h2>Create Quiz</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Quiz Name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Number of Questions"
          value={numQuestions}
          onChange={handleNumQuestionsChange}
          min={1}
        />

        {/* User Assignment Dropdown */}
        <select
          className="form-control mb-2"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Assign to a User (Optional)</option>
          {users.map((user, index) => (
            <option key={index} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
      </div>

      {/* Map over questions and allow editing */}
      {questions.map((q) => (
        <div key={q.id} className="mb-3">
          <label>Question {q.id}</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Question Text"
            value={q.questionText}
            onChange={(e) => handleQuestionChange(q.id, "questionText", e.target.value)}
          />
          <select
            className="form-control mb-2"
            value={q.type}
            onChange={(e) => handleQuestionChange(q.id, "type", e.target.value)}
          >
            <option value="MCQ">MCQ</option>
            <option value="FIB">Fill in the Blank</option>
          </select>

          {q.type === "MCQ" && (
            <>
              {q.options.map((opt, index) => (
                <input
                  key={index}
                  type="text"
                  className="form-control mb-2"
                  value={opt}
                  onChange={(e) => {
                    const updatedOptions = [...q.options];
                    updatedOptions[index] = e.target.value;
                    handleQuestionChange(q.id, "options", updatedOptions);
                  }}
                  placeholder={`Option ${index + 1}`}
                />
              ))}
            </>
          )}

          <input
            type="text"
            className="form-control mb-2"
            value={q.correctAnswer}
            onChange={(e) => handleQuestionChange(q.id, "correctAnswer", e.target.value)}
            placeholder="Enter Correct Answer"
          />
        </div>
      ))}

      <div>
        <button className="btn btn-primary me-3" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-warning me-3" onClick={handlePreview}>
          Preview
        </button>
        <button className="btn btn-success" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  ) : (
    <QuizPreview quiz={{ quizName, numQuestions, questions, assignedTo: selectedUser }} onBack={handleBackFromPreview} />
  );
};

export default QuizCreation;
