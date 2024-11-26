const Score = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="score">
      <h2>Your Score: {percentage}%</h2>
    </div>
  );
};

export default Score;
