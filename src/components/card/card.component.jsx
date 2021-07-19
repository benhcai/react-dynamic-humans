import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${props.creature.id}?set=set5&size=180x180`} />
      <h2>{props.creature.name}</h2>
      <h3>{props.creature.company.catchPhrase.split(" ")[0]}</h3>
    </div>
  );
};
