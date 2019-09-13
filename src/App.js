import React from "react";
import Spring from "./components/useSpring";
import Transition from "./components/useTransition";
import Inner from "./components/inner";
import UseChain from "./components/useChain";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Simple useSpring</h1>
      <div className="area gradient-2 tc">
        <Spring></Spring>
      </div>
      <h1>Simple useTransition</h1>
      <div className="area gradient-3 tc">
        <Transition></Transition>
      </div>
      <h1>Inner Text</h1>
      <p className="tl mb4">
        Change this animation in order to make it animate from 0 to 100%
      </p>
      <div className="area gradient-4 tc">
        <Inner></Inner>
      </div>
      <h1>Use Chain</h1>
      <p className="tl mb4">
        Starting from this basic useTransition animation open the modal then
        make the inner items appears (2 step animation)
      </p>
      <div className="area gradient-8 tc">
        <UseChain></UseChain>
      </div>
    </div>
  );
}

export default App;
