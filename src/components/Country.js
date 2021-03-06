import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Country = ({ countriesDictionary }) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const fetchCountryData = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const country = await response.json();
    setCountry(country);
  };
  useEffect(() => {
    fetchCountryData();
  }, [country]);
  return (
    <div className="countryWebsite">
      <Link to="/" className="goBackBtn">
        <p>
          <i className="fas fa-arrow-left"></i>Go back
        </p>
      </Link>
      <section className="country">
        {country.map((item) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            subregion,
            topLevelDomain,
            currencies,
            languages,
            borders,
            population,
            region,
            capital,
          } = item;

          return (
            <article key={numericCode} className="countrySite">
              <img src={flag} alt={name} />
              <div className="countrySite__textWrap">
                <h3>{name}</h3>
                <div className="countrySite__textWrap__mainInfo">
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
                    Sub Region: <span>{subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{capital}</span>
                  </p>
                </div>
                <div className="countrySite__textWrap__subInfo">
                  <p>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </p>
                  <p>
                    Currencies: <span>{currencies[0].name}</span>
                  </p>
                  <p>
                    Languages: <span>{languages[0].name}</span>
                  </p>
                </div>
                <div className="countrySite__textWrap__borders">
                  <p>Border Countries:</p>
                  <div className="countrySite__textWrap__borders__borderCountries">
                    {borders.map((border) => {
                      const filterDictionaries = countriesDictionary.filter(
                        (item) => {
                          return item.shortName == border;
                        }
                      );
                      return (
                        <Link
                          to={`/countries/${filterDictionaries[0].key}`}
                          className="linkToCountry"
                        >
                          <p>{filterDictionaries[0].key}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Country;
