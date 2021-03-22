import React from "react";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
