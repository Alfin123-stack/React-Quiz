import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  timesRemaining: 10,
};

const SECS_TIMER = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        timesRemaining: state.questions.length * SECS_TIMER,
      };
    case "answerCompleted":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finishQuestion":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "timer":
      return {
        ...state,
        timesRemaining: state.timesRemaining - 1,
        status: state.timesRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("invalid action type" + action.type);
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    highScore,
    timesRemaining,
  } = state;

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (maxPoints, question) => maxPoints + question.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        timesRemaining,
        numQuestions,
        maxPoints,
        dispatch,
      }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
