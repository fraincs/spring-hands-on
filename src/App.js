import React from "react";
import Spring from "./components/useSpring";
import Transition from "./components/useTransition";
import Inner from "./components/inner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Simple useSpring</h1>
      <div className="bubble-gum tc">
        <Spring></Spring>
      </div>
      <h1>Simple useTransition</h1>
      <div className="bubble-gum tc">
        <Transition></Transition>
      </div>
      <h1>Inner Text</h1>
      <div className="bubble-gum tc">
        <Inner></Inner>
      </div>
    </div>
  );
}

export default App;
