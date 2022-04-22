import "./Colleague.scss";
import SwipeableViews from "react-swipeable-views";

import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { PersonType } from "app/types";
import ColleagueCard from "components/ColleagueCard/ColleagueCard";
import { useState } from "react";
import Arrow from "components/Icons/Arrow";
import SliderButton from "components/SliderButton/SliderButton";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

const Colleague = () => {
  const cards = useSelector<RootState>(
    (state: RootState) => state.data.colleagues
  ) as PersonType[];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()

  const isFirst = index === 0;
  const isLast = index === cards.length - 1;

  return (
    <div className="container-sm colleague">
      <div className="colleague-swiper">
        <SliderButton disabled={isFirst} onClick={() => setIndex((p)=>p - 1)}>
          <Arrow classes="blue lg reverse" />
        </SliderButton>
        <div className="colleague-swiper-container">
          <SwipeableViews
            enableMouseEvents
            index={index}
            onChangeIndex={(idx) => setIndex(idx)}
          >
            {cards.map((card, idx) => (
              <ColleagueCard card={card} />
            ))}
          </SwipeableViews>
        </div>
        <SliderButton disabled={isLast} onClick={() => setIndex(index + 1)}>
          <Arrow classes="blue lg" />
        </SliderButton>
      </div>
      <div className={isLast ? "colleague-retry active" : "colleague-retry"}>
        <Button onClick={() => setIndex(0)}>Начать сначала</Button>
        <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
      </div>
    </div>
  );
};
export default Colleague;
