import React from "react";
import Button from "../component/Button";
import home from "../assets/icons/home.svg";
import folder from "../assets/icons/folder.svg";
import bookmark from "../assets/icons/bookmark.svg";
import integration from "../assets/icons/share.svg";
import trash from "../assets/icons/bin.svg";
import setting from "../assets/icons/settings.svg";
import question from "../assets/icons/question-circle.svg";
import rocket from "../assets/icons/rocket-alt.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo"> abc firm</div>
      <ul className="sidebar-list-container">
        <li>
          {" "}
          <img src={home} alt="Home" />
          Home
        </li>

        <li>
          <img src={folder} alt="Home" />
          All Files
        </li>
        <li>
          <img src={bookmark} alt="Home" />
          Saved
        </li>
        <li>
          <img src={integration} alt="Home" />
          Integrations
        </li>
        <li>
          <img src={trash} alt="Home" />
          Trash
        </li>
        <li>
          <img src={setting} alt="Home" />
          Settings
        </li>
        <li>
          <img src={question} alt="Home" />
          Help and Support
        </li>
      </ul>
      <div className="account-upgrade-section">
        <img src={rocket} alt="" />
        <h3>Upgrade Account</h3>

        <p className="info-text2">Access to Unlimited Transcription</p>

        <Button value="Upgrade" />
      </div>
    </div>
  );
};

export default Sidebar;
