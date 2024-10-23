import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Progress from "./Progress";
function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h3>{question.question}</h3>
      <Progress />
      <Options />
    </div>
  );
}

export default Question;
