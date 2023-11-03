import React from "react";

const Button = ({ value, func }) => {
  // console.log(typeof func, func);
  return (
    <button className="button" onClick={func}>
      {value}{" "}
    </button>
  );
};

export default Button;
