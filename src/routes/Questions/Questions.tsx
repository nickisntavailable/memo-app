import { RootState } from "app/store";
import { FullQuestionType } from "app/types";
import Button from "components/Button/Button";
import QuestionItem from "components/QuestionItem/QuestionItem";
import { useEffect } from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Questions.scss";

// const questionsCount = 10;
const generateTest = (data: FullQuestionType[], questionsCount: number) => {
  const rand = Math.floor(Math.random() * (data.length - questionsCount));
    return data.slice(rand, rand + questionsCount)
};

const Questions = () => {
  const questionsCount = useSelector<RootState>(
    (state) => state.tests.testLength
  ) as number;
  const [questions, setQuestions] = useState<FullQuestionType[]>([]);
  const data = useSelector<RootState>(
    (state) => state.data.questions
  ) as FullQuestionType[];
  const [isChosen, setIsChosen] = useState<string>("");
  const navigator = useNavigate();
  const [wrong, setWrong] = useState(0);

  

  useEffect(() => {
    setQuestions (generateTest(data, questionsCount));
  }, [data, questionsCount]);

  const handleUncorrect = () => {
    setIsChosen(questions[0].answer);
    setWrong(w => w + 1);
  };
  const handleСorrect = () => {
    setIsChosen("");
    setQuestions(q => q.slice(1));
  };
  const handleTryAgain = () => {
    setQuestions (generateTest(data, questionsCount));
    setIsChosen("");
    setWrong(0);
  };

  return (
    <div className="container-sm questions">
      <ProgressBar
        animated
        now={((questionsCount - questions.length) * 100) / questionsCount}
        label={`${questionsCount - questions.length}/${questionsCount}`}
      />
      {questions.length > 0 ? (
        <>
          <QuestionItem
            data={questions[0]}
            isChosen={isChosen}
            setIsChosen={(title: string) => setIsChosen(title)}
          />
          {isChosen && isChosen !== questions[0].answer && (
            <Button onClick={handleUncorrect}>
              Показать правильный ответ?
            </Button>
          )}
          {isChosen && isChosen === questions[0].answer && (
            <Button onClick={handleСorrect}>Следующий вопрос</Button>
          )}
        </>
      ) : (
        <div className="questions-footer">
          <p>Вопросов больше нет. В этот раз получилось правильно ответить на <span>{questionsCount - wrong}</span> вопросов</p>
          <Button onClick={() => navigator("/")}>
            Вернуться в главное меню
          </Button>
          <Button onClick={handleTryAgain}>Пройти еще один тест</Button>
        </div>
      )}
    </div>
  );
};

export default Questions;
