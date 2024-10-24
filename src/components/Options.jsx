import NextButton from "./NextButton";
import Footer from "./Footer";
import Timer from "./Timers";
import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { index, dispatch, answer, questions } = useQuiz();

  const question = questions[index];
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
        <Timer />

        <NextButton />
      </Footer>
    </div>
  );
}

export default Options;
