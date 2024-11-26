const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score">
      <h2>
        Your Score: {score}/{totalQuestions}
      </h2>
    </div>
  );
};

export default Score;
