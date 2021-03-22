import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  const [filter, setFilter] = useState(countries);
  const filterCountries = (value = "") => {
    console.log(value);
    const filteredCountries = countries.filter((item) => {
      if (item == "") {
        return item;
      } else if (item.name.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });
    setFilter(filteredCountries);
  };

  useEffect(() => {
    filterCountries();
  }, [countries]);

  return (
    <>
      <SearchBar filterCountries={filterCountries} />
      <section className="countries">
        {filter.map((country) => {
          const {
            numericCode,
            capital,
            name,
            population,
            nativeName,
            region,
            flag,
          } = country;

          return (
            <div className="countries__item" key={numericCode}>
              <img className="countries__item__flag" src={flag} alt={name} />
              <div className="countries__item__details">
                <h3 className="countries__item__details__title">{name}</h3>
                <p className="countries__item__details__info">
                  Native Name: <span>{nativeName}</span>
                </p>
                <p className="countries__item__details__info">
                  Population: <span>{population}</span>
                </p>
                <p className="countries__item__details__info">
                  Region: <span>{region}</span>
                </p>
                <p className="countries__item__details__info">
                  Capital: <span>{capital}</span>
                </p>
                <Link to={`/countries/${name}`} className="learnMoreBtn">
                  <p>Learn more</p>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
