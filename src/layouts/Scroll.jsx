import React, { useState, useRef } from "react";
import { motion, useScroll } from "motion/react";

const ScrollLinked = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(ref);

  return (
    <>
      <motion.div
        id="scroll-indicator"
        ref={ref}
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 99,
          backgroundColor: "yellow",
        }}
      />
    </>
  );
};

export default ScrollLinked;
