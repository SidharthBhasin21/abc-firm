import React from "react";

const Card = ({ img, number, text }) => {
  return (
    <div className="card">
      <div className="rounded-box">
        <img src={img} alt="icon" />
      </div>
      <p className="transcribed-text">{number}</p>
      <p className="transcribed-text1">{text}</p>
    </div>
  );
};

export default Card;
