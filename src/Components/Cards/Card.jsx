import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="card-txt">
        <h5>{props.category}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
