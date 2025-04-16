import React, { useState } from "react";
import { motion } from "framer-motion";

const Cascade = () => {
  const [animationState, setAnimationState] = useState("initial");

  const elements = ["A", "B", "C", "D"];
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];
  const opacity = [1, 0.8, 0.7, 0.6];

  const variants = {
    ascend: (index) => ({
      y: index == 0 ? -5 : index * -100 - 5 ,
      scale: 1 - index / 20,
      opacity: opacity[index],
      transition: {
        type: "spring",
        duration: 0.5,
      },
    }),
    descend: (index) => ({
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    }),
  };

  return (
    <div className="cascade h-screen flex flex-col justify-center items-center gap-4 bg-teal-950">
      <motion.button
        className="bg-gray-600 p-4 cursor-pointer rounded-2xl  text-white font-bold"
        onClick={() => setAnimationState("ascend")}
        whileHover={{ scale: 0.9 }}
      >
        Collapse
      </motion.button>
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className={`w-72 ${colors[index]} rounded-2xl h-24 shadow-sm cursor-pointer `}
          custom={index}
          style={{ zIndex: elements.length - index }}
          variants={variants}
          initial="initial"
          animate={animationState}
          onClick={() => setAnimationState("descend")}
        />
      ))}
    </div>
  );
};

export default Cascade;
