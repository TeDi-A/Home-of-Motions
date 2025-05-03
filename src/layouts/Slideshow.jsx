import React, { useState, useRef } from "react";
import { motion, AnimatePresence, wrap } from "motion/react";

const elements = [1, 2, 3, 4, 5];

const SlideshowApp = () => {
  const [selectedItem, setSelectedItem] = useState(elements[0]);
  const [direction, setDirection] = useState(1);

  // This controls the slide direction
  function setImageDirection(newDirection) {
    const nextItem = wrap(1, elements.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
    console.log(newDirection);
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-zinc-900 ">
      <Slideshow selectedItem={selectedItem} direction={direction} />

      <Buttons setImageDirection={setImageDirection} />
    </div>
  );
};

const Buttons = ({ setImageDirection }) => {
  return (
    <div className="buttons flex gap-8 mt-4">
      <button
        className="px-8 py-4 bg-stone-700 text-white rounded-2xl"
        onClick={() => setImageDirection(-1)}
      >
        Left
      </button>
      <button
        className="px-8 py-4 bg-stone-700 text-white rounded-2xl"
        onClick={() => setImageDirection(1)}
      >
        Right
      </button>
    </div>
  );
};

const Slideshow = ({ direction, selectedItem }) => {
  const colors = [
    "bg-red-800",
    "bg-yellow-600",
    "bg-green-900",
    "bg-purple-900",
    "bg-teal-900",
  ];

  const index = elements.indexOf(selectedItem);

  return (
    <div className="relative w-64 h-64 overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={selectedItem}
          initial={{ opacity: 0, x: direction * 200 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 0.5,
              bounce: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            x: direction * -200,
            transition: { duration: 0.3 },
          }}
          className={`absolute top-0 left-0 w-64 h-64 ${colors[index]}`}
        />
      </AnimatePresence>
    </div>
  );
};

export default SlideshowApp;
