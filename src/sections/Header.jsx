import React from "react";
import SearchBar from "../component/SearchBar";
import avatar from "../assets/avatar.svg";
import notification from "../assets/notification.svg";
const Header = () => {
  return (
    <header className="header-container">
      <SearchBar />
      <div className="profile-icons">
        <img src={notification} alt="notification" />
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
