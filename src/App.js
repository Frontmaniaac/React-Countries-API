import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Countries />
    </>
  );
}

export default App;
