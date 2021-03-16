import React, { useState, useEffect } from "react";

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
  return (
    <section className="countries">
      {countries.map((country) => {
        const {
          numericCode,
          capital,
          name,
          population,
          nativeName,
          region,
          subregion,
          topLevelDomain,
          currencies,
          languages,
          borders,
          flag,
        } = country;
        return (
          <div className="countries__item" key={numericCode}>
            <img className="countries__item__flag" src={flag} alt={name} />
            <h3>{name}</h3>
            <p>
              Native Name: <span>{nativeName}</span>
            </p>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
            {/* <p>
              Sub Region: <span>{subregion}</span>
            </p>
            
            <p>
              Top Level Domain: <span>{topLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{currencies}</span>
            </p>
            <p>
              Languages: <span>{languages}</span>
            </p> */}
          </div>
        );
      })}
    </section>
  );
};

export default Countries;
