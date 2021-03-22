import React, { useState } from "react";

const Header = () => {
  const switchTheme = () => {
    // const header = document.querySelector(".header");
    // const countries = document.querySelector(".countries");
    // const country = document.querySelectorAll(".countries__item__details");
    // const searchBar = document.querySelector(".form");
    // const learnMoreBtn = document.querySelector(".learnMoreBtn");
    // header.classList.toggle("lightThemeShadow");
    // countries.classList.toggle("lightTheme");
    // country.forEach((item) => {
    //   item.classList.toggle("lightThemeShadow");
    // });
    // searchBar.classlist.toggle("lightTheme");
    // learnMoreBtn.classList.toggle("lightTheme");
  };
  return (
    <>
      <header className="header">
        <p className="header__logo">Worldwide</p>
        <a href="#" className="header__themeSwitch">
          <i className="fas fa-moon header__themeSwitch__moonIcon"></i>
          <p onClick={switchTheme} className="header__themeSwitch__text">
            Dark Theme
          </p>
        </a>
      </header>
    </>
  );
};
export default Header;
