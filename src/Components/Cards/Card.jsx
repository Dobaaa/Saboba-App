import React from "react";
import "./Card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Card = (props) => {
  return (
    <div className="card">
      <LazyLoadImage src={props.img} alt="" />
      <div className="card-txt">
        <h5>{props.category}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
