import { animated, useSpring } from "react-spring";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { animConfig } from "../../utils/configs";

function Inner() {
  const [number, setNumber] = useState(0);

  // const props = useSpring({
  //   config: animConfig,
  //   from: { opacity: 0 },
  //   to: { opacity: 1 }
  // });

  return (
    <>
      <div className="flex justify-center">
        <Button onClick={() => setNumber(number === 0 ? 1 : 0)}>
          Increase / Decrease Number
        </Button>
      </div>
      <p className="f1">
        <animated.span>{number}</animated.span>
      </p>
    </>
  );
}

export default Inner;
