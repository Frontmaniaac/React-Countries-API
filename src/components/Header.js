import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <p className="header__logo">Worldwide</p>
        <a href="#" className="header__themeSwitch">
          <img
            src="moon-solid.svg"
            alt="moon"
            className="header__themeSwitch__moonSVG"
          />
          <p className="header__themeSwitch__text">Dark Theme</p>
        </a>
      </header>
    </>
  );
};
export default Header;
