import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <p className="header__logo">Worldwide</p>
        <a href="#" className="header__themeSwitch">
          <i className="fas fa-moon header__themeSwitch__moonIcon"></i>
          <p className="header__themeSwitch__text">Dark Theme</p>
        </a>
      </header>
    </>
  );
};
export default Header;
