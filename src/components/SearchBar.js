import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Search for a country"
      />
      <select name="regions" id="" className="searchBar__select">
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
    </div>
  );
};
export default SearchBar;
