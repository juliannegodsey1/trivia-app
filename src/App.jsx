import React, { useState } from "react";
import Header from "./components/header/Header";
import Question from "./components/question/Question";
import Footer from "./components/footer/Footer";
import Score from "./components/score/Score";
import { questions } from "./assets/questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const submitQuiz = () => {
    setIsQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizComplete(false);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        {isQuizComplete ? (
          <div className="score-container">
            <Score score={score} totalQuestions={questions.length} />
            <button className="reset-button" onClick={resetQuiz}>
              Try Again!
            </button>
          </div>
        ) : (
          <div className="question-container">
            {questions[currentQuestion] && (
              <Question
                questionData={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            )}
            <div className="pagination">
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              {currentQuestion === questions.length - 1 ? (
                <button onClick={submitQuiz}>Submit</button>
              ) : (
                <button onClick={nextQuestion}>Next</button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
