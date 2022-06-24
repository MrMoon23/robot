import React from "react";
import "./card_list.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.monsters.map((monster) => (
        <Card key={monster.id} name={monster.name} />
      ))}
    </div>
  );
};
