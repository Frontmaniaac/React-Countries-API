import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryData();
  }, []);
  return (
    <div className="countryWebsite">
      <Link to="/" className="goBackBtn">
        <i className="fas fa-arrow-left"></i>
        Go back
      </Link>
    </div>
  );
};

export default Country;
