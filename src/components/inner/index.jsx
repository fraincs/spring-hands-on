import { animated, config, useSpring } from "react-spring";
import React from "react";

function Inner() {
  const props = useSpring({
    config: config.stiff,
    from: { number: 0 },
    to: { number: 1 }
  });

  const number = props.number;

  return (
    <>
      <h1>Inner Text</h1>
      <p className="f1">
        <animated.span>
          {number.interpolate(v => Math.round(v * 100))}
        </animated.span>
        %
      </p>
    </>
  );
}

export default Inner;
