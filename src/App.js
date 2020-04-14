import React from "react";
import StoriesList from "./components/StoriesList";
import Nav from "./components/nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <StoriesList />
    </div>
  );
}

export default App;
