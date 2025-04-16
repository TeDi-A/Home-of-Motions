import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  animate,
} from "motion/react";

function scrollOverflowMask(scrollXProgress) {
  const left = `0%`;
  const right = `100%`;
  const leftInset = `20%`;
  const rightInset = `80%`;
  const transparent = `#0000`;
  const opaque = `#000`;

  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    if (latest === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (latest === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() > 0 &&
      scrollXProgress.getPrevious() < 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})` 
      );
    }
  });

  return maskImage;
}

const ScrollXBox = () => {
  const boxRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: boxRef });

  const elements = ["A", "B", "C", "D"];
  const colors = [
    "bg-red-800",
    "bg-yellow-600",
    "bg-green-900",
    "bg-purple-900",
  ];

  const maskImage = scrollOverflowMask(scrollXProgress);

  return (
    <div className="scroll-x h-screen flex flex-col justify-center items-center gap-4 bg-black ">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          pathLength="1"
          style={{ fill: "none", stroke: "red", strokeWidth: 20 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          style={{
            fill: "none",
            stroke: "yellow",
            strokeWidth: 10,
            pathLength: scrollXProgress,
          }}
        />
      </svg>

      <motion.div
        ref={boxRef}
        className="element-container overflow-x-scroll w-72 flex gap-4 "
        style={{
          maskImage: maskImage,
          // maskImage: maskImage.get(),
          // WebkitMaskImage: maskImage.get(),
        }}
      >
        {elements.map((_, index) => (
          <li
            key={index}
            className={`${colors[index]} w-48 h-48 flex-shrink-0 list-none`}
          ></li>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollXBox;
