import { animated, useTransition } from "react-spring";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function UseChain() {
  const [modalOpened, setModal] = useState(false);

  const transition = useTransition(modalOpened, null, {
    from: { opacity: 0, transform: "translate3d(0,50px,0) scale(0.98)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
    leave: { opacity: 0, transform: "translate3d(0,-50px,0) scale(0.98)" }
  });

  return (
    <>
      <div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              setModal(!modalOpened);
            }}
          >
            Chain
          </Button>
        </div>
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key} className="modal">
                <div className="gradient-wrapper">
                  <div className="gradient-box gradient-1"></div>
                  <div className="gradient-box gradient-2"></div>
                  <div className="gradient-box gradient-3"></div>
                  <div className="gradient-box gradient-4"></div>
                  <div className="gradient-box gradient-5"></div>
                  <div className="gradient-box gradient-6"></div>
                  <div className="gradient-box gradient-7"></div>
                  <div className="gradient-box gradient-8"></div>
                  <div className="gradient-box gradient-9"></div>
                </div>
              </animated.div>
            )
        )}
      </div>
    </>
  );
}

export default UseChain;
