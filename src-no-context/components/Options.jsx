import NextButton from "./NextButton";
import Footer from "./Footer";
import Timer from "./Timers";

function Options({
  question,
  dispatch,
  answer,
  numQuestions,
  index,
  timesRemaining,
}) {
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
      <Footer>
        <Timer dispatch={dispatch} timesRemaining={timesRemaining} />

        <NextButton
          dispatch={dispatch}
          answer={answer}
          numQuestions={numQuestions}
          index={index}
        />
      </Footer>
    </div>
  );
}

export default Options;
