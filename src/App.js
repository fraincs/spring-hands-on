import React from "react";
import Spring from "./components/useSpring";
import Transition from "./components/useTransition";
import Inner from "./components/inner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="w-50">
          <Spring></Spring>
          <div className="">    
              <Transition></Transition>
          </div>
          <div className="mt6">    
              <Inner></Inner>
          </div>            
      </div>
    </div>
  );
}

export default App;
