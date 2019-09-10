import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const props = useSpring({ opacity: toggle ? 1 : 0 });

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <animated.div style={props}>
        <p>Hello</p>
      </animated.div>
    </div>
  );
}

export default App;
