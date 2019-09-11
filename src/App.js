import React from "react";
import Spring from "./components/useSpring";
import Transition from "./components/useTransition";
import Inner from "./components/inner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Spring></Spring>
      <Transition></Transition>
      <Inner></Inner>
    </div>
  );
}

export default App;
