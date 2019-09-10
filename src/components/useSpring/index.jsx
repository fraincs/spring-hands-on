import { animated, useSpring } from "react-spring";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Spring() {
  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "translate3d(0,0,0)" : "translate3d(0, 50px, 0)"
  });

  return (
    <>
      <h1>Simple useSpring</h1>
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
      <animated.div style={props}>
        <p className="f1">Hello World</p>
      </animated.div>
    </>
  );
}

export default Spring;
