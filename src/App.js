import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const countriesDictionary = [];
  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();
    setCountries(countries);
  };
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries
          countries={countries}
          fetchCountries={fetchCountries}
          countriesDictionary={countriesDictionary}
        />
      </Route>
      <Route
        path="/countries/:name"
        children={<Country countriesDictionary={countriesDictionary} />}
      ></Route>
    </Router>
  );
}

export default App;
