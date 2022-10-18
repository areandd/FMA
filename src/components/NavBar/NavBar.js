import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="header">
      <h1 className="header__logo">(FMA)</h1>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search"
        />
        <AiOutlineSearch className="header__searchIcon" />
      </div>
        <BsPerson className="avatar" />
    </div>
  );
}

export default NavBar;
