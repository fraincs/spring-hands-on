import { animated, useSpring } from "react-spring";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Inner() {
  const [number, setNumber] = useState(0);

  const props = useSpring({
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
      clamp: true
    },
    from: { chiffre: number },
    to: { chiffre: number }
  });

  const { chiffre } = { ...props };

  return (
    <>
      <div className="flex justify-center">
        <Button onClick={() => setNumber(number === 0 ? 1 : 0)}>
          Increase / Decrease
        </Button>
      </div>
      <p className="f1">
        <animated.span>
          {chiffre.interpolate(v => `${Math.round(v * 100)}%`)}
        </animated.span>
      </p>
    </>
  );
}

export default Inner;
