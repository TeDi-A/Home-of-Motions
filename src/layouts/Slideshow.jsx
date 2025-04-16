import React, { useState, forwardRef } from "react";
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
    console.log(direction);
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-zinc-900 ">
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slideshow selectedItem={selectedItem} direction={direction} />
      </AnimatePresence>

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

const Slideshow = forwardRef(function Slide({ direction, selectedItem }, ref) {
  const colors = [
    "bg-red-800",
    "bg-yellow-600",
    "bg-green-900",
    "bg-purple-900",
    "bg-teal-900",
  ];
  return (  
    <div>
      {elements.map(
        (element, index) =>
          element === selectedItem && (
            <motion.div
              key={element}
              ref={ref}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.1,
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.4,
                },
              }}
              exit={{ opacity: 0, x: direction * -100 }}
              className={`${colors[index]} w-64 h-64 flex-shrink-0`}
            />
          )
      )}
    </div>
  );
});

export default SlideshowApp;
