import { animated, useTransition } from "react-spring";
import React, { useState } from "react";

function Transition() {
  const [on, toggle] = useState(false);

  const transition = useTransition(on, null, {
    from: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -100px, 0)" }
  });

  return (
    <div className="mt10">
      <h1>Simple useTransition</h1>
      <button className="mb13" onClick={() => toggle(!on)}>
        Change
      </button>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} key={key}>
              <p className="f1">Hello World</p>
            </animated.div>
          )
      )}
    </div>
  );
}

export default Transition;
