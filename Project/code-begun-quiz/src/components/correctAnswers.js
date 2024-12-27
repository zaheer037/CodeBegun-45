const savedQuiz = {
    quizName: "Sample Quiz",
    numQuestions: 3,
    questions: [
      {
        id: 1,
        questionText: "What is React?",
        type: "MCQ",
        options: ["Library", "Framework", "Language"],
        correctAnswer: "Library" // Added correct answer for MCQ
      },
      {
        id: 2,
        questionText: "Explain JSX",
        type: "FIB",
        correctAnswer: "JavaScript XML" // Correct answer for FIB
      },
      {
        id: 3,
        questionText: "What is the use of hooks in React?",
        type: "MCQ",
        options: ["State management", "Component lifecycle", "Styling"],
        correctAnswer: "State management" // Correct answer for MCQ
      }
    ]
  };
  