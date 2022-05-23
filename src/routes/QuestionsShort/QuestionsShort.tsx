import { RootState } from "app/store";
import { useSelector } from "react-redux";
import "./QuestionsShort.scss";

import { CardSwiper } from "react-card-rotate-swiper";
import { ShortQUestionType } from "app/types";
import { useEffect, useRef, useState } from "react";

import Button from "components/Button/Button";
import { ProgressBar } from "react-bootstrap";

const generateTest = (data: ShortQUestionType[], questionsCount: number) => {
  const rand = Math.floor(Math.random() * (data.length - questionsCount));
  return data.slice(rand, rand + questionsCount);
};

const QuestionsShort = () => {
  const questionsCount = useSelector<RootState>(
    (state) => state.tests.shortTestLength
  ) as number;
  const [questions, setQuestions] = useState<ShortQUestionType[]>([]);
  const data = useSelector<RootState>(
    (state) => state.data.questionsShort
  ) as ShortQUestionType[];
  const [showAnswer, setShowAnswer] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const r = useRef<number>();
  const handleSwipe = (d: any, p: ShortQUestionType) => {
    setShowAnswer("");
    window.clearTimeout(r.current);

    const rightDescition =
      ((d === "left" || d === "up") && p.answer) ||
      ((d === "right" || d === "down") && !p.answer);

    if (rightDescition) {
      setShowAnswer("right");
      setCount((q) => q + 1);
    } else if (!rightDescition) {
      setShowAnswer("wrong");
    }
    setQuestions(questions.slice(0, -1));
    r.current = window.setTimeout(() => setShowAnswer(""), 5000);
  };

  const tryAgain = () => {
    setCount(0);
    generateTest(data, questionsCount);
  };
  useEffect(() => {
    setQuestions(generateTest(data, questionsCount));
  }, [data, questionsCount]);

  //   https://ws3.morpher.ru/russian/declension?s=%D1%82%D0%B0%D0%BD%D1%86%D1%8B&format=json
  // апи для склонения слов по падежам
  // апи для получения женского или мужского рода
  // https://ws3.morpher.ru/russian/declension?s=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD&flags=Feminine&format=json
  // flags=Feminine - для получения женского рода
  // flags=Masculine - для получения мужского рода
  return (
    <div className="container-sm questions-short">
      <ProgressBar
        animated
        now={((questionsCount - questions.length) * 100) / questionsCount}
        label={`${questionsCount - questions.length}/${questionsCount}`}
      />
      {questions.length > 0 ? (
        <>
          <div className="questions-short-cards">
            {questions.map((p, idx) => (
              <CardSwiper
                key={idx}
                onSwipe={(d: string) => handleSwipe(d, p)}
                className={"swiper"}
                throwLimit={100}
                contents={
                  <div className="questions-short-card">
                    {p.photo && (
                      <div
                        className="questions-short-card-img"
                        style={{ backgroundImage: `url(${p.photo})` }}
                      ></div>
                    )}
                    <h2>{p.question}</h2>
                  </div>
                }
              />
            ))}
          </div>
          <div className="questions-short-answer">
            {showAnswer === "right" && (
              <div className="questions-short-answer-right">Правильно</div>
            )}
            {showAnswer === "wrong" && (
              <div className="questions-short-answer-wrong">Ошибка</div>
            )}
          </div>
        </>
      ) : (
        <div className="questions-short-results">
          <h2>Ваш результат</h2>
          <p>{`${count} / ${questionsCount}`}</p>
          <Button onClick={tryAgain}>Попробовать снова</Button>
        </div>
      )}
    </div>
  );
};

export default QuestionsShort;
