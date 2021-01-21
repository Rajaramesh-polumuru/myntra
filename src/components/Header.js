import React from "react";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
function Header() {
  return (
    <nav className="nvbar">
      <div className="nv">
        <div className="lgo"></div>
        <ul className="desktop-navContent">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME&LIVING</li>
          <li>OFFERS</li>
        </ul>
        <div className="search">
          <ShoppingCartRoundedIcon />
        </div>
      </div>
    </nav>
  );
}

export default Header;
