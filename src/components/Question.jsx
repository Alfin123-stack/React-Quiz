import Options from "./Options";
import Progress from "./Progress";
function Question({
  question,
  dispatch,
  answer,
  numQuestions,
  index,
  maxPoints,
  points,
}) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Progress
        numQuestions={numQuestions}
        index={index}
        maxPoints={maxPoints}
        points={points}
        answer={answer}
      />
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
