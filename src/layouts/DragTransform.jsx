import React, { useState, forwardRef } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "motion/react";

const DragTransform = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "rgb(200, 0, 0)",
    "rgb(255, 155, 0)",
    "rgb(0, 209, 0)",
  ]);



  return (
    <>
      <motion.div
        className="drag-transform bg-indigo-900 w-screen h-screen flex justify-center items-center"
        style={{ background }}
      >
        <motion.div
          style={{ x }}
          className="bg-white w-32 h-32 rounded-2xl cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: 0 }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default DragTransform;
