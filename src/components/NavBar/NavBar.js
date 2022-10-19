import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">(FMA)</h1>
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search"
        />

        <AiOutlineSearch className="header__searchIcon" />
      </div>
      <Link to="/profile-page">
        <BsPerson className="avatar" />
      </Link>
    </div>
  );
}

export default NavBar;
