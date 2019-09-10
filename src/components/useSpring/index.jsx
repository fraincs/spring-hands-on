import { animated, useSpring } from "react-spring";
import React, { useState } from "react";

function Spring() {
  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "translate3d(0,0,0)" : "translate3d(0, 100px, 0)"
  });

  return (
    <>
      <h1>Simple useSpring</h1>
      <button className="ui button" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <animated.div style={props}>
        <p className="f1">Hello</p>
      </animated.div>
    </>
  );
}

export default Spring;
