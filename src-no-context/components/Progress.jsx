function Progress({ index, numQuestions, maxPoints, points, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        Score: <strong>{points ? points : 0}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
