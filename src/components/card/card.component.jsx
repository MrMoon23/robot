import React from "react";
import "./card.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.name}?set=set1&size=180x180`}
        alt="Robot"
      />
      <h2>{props.name}</h2>
    </div>
  );
};
