import { PersonType } from "app/types";
import { useState } from "react";
import "./ColleagueCard.scss";


type ColleagueCardProps = {
  card: PersonType;
};

const ColleagueCard = ({ card }: ColleagueCardProps) => {
    const [active, setActive] = useState(false);

  return (
    <div className={active ? "card-container active" : "card-container"}>
      <div className="card" onClick={() => setActive(!active)}>
        <div
          className="front"
          style={{ backgroundImage: `url(${card.photo})` }}
        >
          <h2>{`${card.name}, ${card.gender.toUpperCase()}`}</h2>
        </div>
        <div className="back">
          <h2>{`Имя: ${card.name}`}</h2>
          <p>{`Пол: ${card.gender}`}</p>
          <p>{`Прошлое место работы: ${card.prev_work}`}</p>
          <p>{`Спорт: ${card.sport}`}</p>
        </div>
      </div>
    </div>
  );
};
export default ColleagueCard;
