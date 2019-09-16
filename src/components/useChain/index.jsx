import { animated, useChain, useTransition } from "react-spring";
import React, { useRef, useState } from "react";
import { Button } from "semantic-ui-react";

function UseChain() {
  const [cardOpened, setCard] = useState(false);

  const data = [
    {
      name: "Rare Wind",
      description: "#a8edea → #fed6e3",
      css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      name: "Saint Petersburg",
      description: "#f5f7fa → #c3cfe2",
      css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    }
  ];

  const cardRef = useRef();
  const cardTransition = useTransition(cardOpened, null, {
    from: { opacity: 0, transform: "translate3d(0,50px,0) scale(0.98)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
    leave: { opacity: 0, transform: "translate3d(0,-50px,0) scale(0.98)" },
    ref: cardRef
  });

  const tilesRef = useRef();
  const tilesTransition = useTransition(
    cardOpened ? data : [],
    item => item.name,
    {
      from: { opacity: 0, transform: "translate3d(0,50px,0) scale(0.98)" },
      enter: { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
      leave: { opacity: 0, transform: "translate3d(0,0,0) scale(0.98)" },
      trail: 400 / data.length,
      ref: tilesRef
    }
  );

  useChain(cardOpened ? [cardRef, tilesRef] : [tilesRef, cardRef], [
    0,
    cardOpened ? 0.1 : 0.6
  ]);

  return (
    <>
      <div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              setCard(!cardOpened);
            }}
          >
            Chain
          </Button>
        </div>
        {cardTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key} className="modal">
                <div className="gradient-wrapper shadow-4">
                  {tilesTransition.map(({ item, key, props }) => (
                    <animated.div
                      className="gradient-box"
                      key={key}
                      style={{ ...props, background: item.css }}
                    />
                  ))}
                </div>
              </animated.div>
            )
        )}
      </div>
    </>
  );
}

export default UseChain;
