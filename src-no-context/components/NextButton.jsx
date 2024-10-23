function NextButton({ dispatch, answer, numQuestions, index }) {
  const isAnswer = answer === null;
  const isFinished = index === numQuestions - 1;

  const onAnswer = () => {
    if (isFinished) {
      dispatch({ type: "finishQuestion" });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  };

  return (
    <div>
      <button className="btn btn-ui" disabled={isAnswer} onClick={onAnswer}>
        {isFinished ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default NextButton;
