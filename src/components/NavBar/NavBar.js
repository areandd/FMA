import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="header__logo"></div>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search popular stocks"
        />
        <AiOutlineSearch className="header__searchIcon" />
      </div>

      <div className="profile">
          <BsFillPersonFill />
        </div>
    </header>
  );
}

export default NavBar;
