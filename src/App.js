import React from "react";
import "./App.css";
import Header from "./Header.js";
import TinderCards from "./TinderCards";
import SwipeButtoms from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtoms />
    </div>
  );
}

export default App;
