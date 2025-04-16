import React, { useRef } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const UseMotion = () => {
  const element = useMotionValue(10);
  useMotionValueEvent(element, "animationStart", () => {
    // console.log("animation started on element");
  });
  useMotionValueEvent(element, "change", (latest) => {
    // console.log("element changed to", latest);
  });

  return (
    <div className="container-el bg-green-800">
      <div className="flex justify-center items-center w-screen h-screen ">
        <motion.div
          style={{ element }}
          className="w-32 h-32 bg-teal-500"
          animate={{ element: 2, y: 0, opacity: 1, scale: 2 }}
          transition={{duration: 3}}
        />
      </div>
    </div>
  );
};

export default UseMotion;
