import Options from "./Options";

function Question({ question }) {
  return (
    <div>
      <h3>{question.question}</h3>

      <Options question={question} />
    </div>
  );
}

export default Question;