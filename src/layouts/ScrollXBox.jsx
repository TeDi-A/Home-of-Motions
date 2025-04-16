import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const ScrollXBox = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const left = `0%`;
  const right = `100%`;
  const leftInset = `20%`;
  const rightInset = `80%`;
  const transparent = `#0000`;
  const opaque = `#000`;

  const [maskImage, setMaskImage] = useState(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
  );

  useEffect(() => {
    return scrollXProgress.on("change", (value) => {
      if (value === 0) {
        setMaskImage(
          `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
        );
      } else if (value === 1) {
        setMaskImage(
          `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
        );
      } else {
        setMaskImage(
          `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
        );
      }
    });
  }, [scrollXProgress]);

  const elements = ["A", "B", "C", "D"];
  const colors = [
    "bg-red-800",
    "bg-yellow-600",
    "bg-green-900",
    "bg-purple-900",
  ];

  // const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div className="scroll-x h-screen flex flex-col justify-center items-center gap-4 bg-black">
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
        ref={ref}
        className="element-container overflow-x-scroll w-72 flex gap-4"
        style={{
          maskImage: maskImage
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
