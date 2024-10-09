import NextButton from "./NextButton";

function Options({ question, dispatch, answer }) {
  const isAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswer
              ? index === question.correctOption
                ? "correct"
                : " wrong"
              : ""
          }`}
          key={index}
          disabled={isAnswer}
          onClick={() => dispatch({ type: "answerCompleted", payload: index })}>
          {option}
        </button>
      ))}

      <NextButton dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Options;
