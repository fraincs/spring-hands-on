import { animated } from "react-spring";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Inner() {
  const [number, setNumber] = useState(0);

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
