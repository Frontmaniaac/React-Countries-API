import React, { useState } from "react";

const SearchBar = ({ filterCountries, filterCountriesByRegion }) => {
  const handleInputValue = (e) => {
    filterCountries(e.target.value);
  };

  const handleSelectChange = (e) => {
    filterCountriesByRegion(e.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Search for a country"
        onChange={handleInputValue}
      />
      <select
        onChange={handleSelectChange}
        name="regions"
        className="form__select"
      >
        <option value="default" disabled defaultValue>
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
