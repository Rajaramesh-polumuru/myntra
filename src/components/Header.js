import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import Logo from "./logo.png";
function Header() {
  return (
    <nav className="nvbar">
      <div className="nv">
        <img className="lgoimg" src={Logo} alt="img not found" />

        <ul className="desktop-navContent">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME&LIVING</li>
          <li>OFFERS</li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
}

export default Header;
