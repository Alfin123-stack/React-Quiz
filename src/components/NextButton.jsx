function NextButton({ dispatch, answer }) {
  const isAnswer = answer === null;
  return (
    <div>
      <button
        className="btn btn-ui"
        disabled={isAnswer}
        onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    </div>
  );
}

export default NextButton;
