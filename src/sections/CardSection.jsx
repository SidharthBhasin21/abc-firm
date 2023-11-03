import React from "react";
import Card from "../component/Card";
import folder from "../assets/icons/folder.svg";
import text from "../assets/icons/text.svg";
import bookmark from "../assets/icons/bookmark.svg";
const CardSection = () => {
  return (
    <div className="card-container">
      <Card number={100} text={"Uploaded files"} img={folder} />
      <Card number={50} text={"Transcribed"} img={text} />
      <Card number={20} text={"Saved"} img={bookmark} />
    </div>
  );
};

export default CardSection;
