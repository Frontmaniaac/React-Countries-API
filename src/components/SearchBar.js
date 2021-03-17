import React from "react";

const SearchBar = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Search for a country"
      />
      <select name="regions" id="" className="form__select">
        <option value="default" disabled selected>
          Filter by Region
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};
export default SearchBar;
