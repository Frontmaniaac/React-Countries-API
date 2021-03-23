import React from "react";

const Header = () => {
  const switchTheme = () => {
    const header = document.querySelector(".header");
    header.classList.toggle("lightTheme");
    if (header.classList.contains("lightTheme")) {
      document.documentElement.style.setProperty("--darkBlue", "#fff");
      document.documentElement.style.setProperty("--veryDarkBlue", "#fff");
      document.documentElement.style.setProperty("--lightFont", "#000");
      document.documentElement.style.setProperty(
        "--shadow",
        "2px 2px 8px #666"
      );
    } else {
      document.documentElement.style.setProperty(
        "--darkBlue",
        "hsl(207, 26%, 17%)"
      );
      document.documentElement.style.setProperty(
        "--veryDarkBlue",
        "hsl(209, 23%, 22%)"
      );
      document.documentElement.style.setProperty("--lightFont", "#fff");
      document.documentElement.style.setProperty("--shadow", "0");
    }
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
