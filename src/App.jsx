import React, { useState } from "react";
import Header from "./components/header/Header";
import Question from "./components/question/Question";
import { questions } from "./assets/questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="question-container">
        {questions[currentQuestion] && (
          <Question questionData={questions[currentQuestion]} />
        )}
        <div className="pagination">
          <button onClick={prevQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
