const Question = ({ questionData, onAnswer }) => {
  const handleSelection = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questionData.correctAnswer;
    onAnswer(isCorrect);
  };

  return (
    <div className="question-card">
      <h2 className="question-title">{questionData.question}</h2>
      <ul className="answer-options">
        {questionData.options.map((answer, index) => (
          <li key={index} className="answer-option">
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={answer}
              onChange={() => handleSelection(answer)}
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
