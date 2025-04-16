import { React, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Dummy from "./Dummy";

const PracticeMotion = () => {
  const MotionComponent = motion.create(Dummy);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="motion-container h-screen flex items-center justify-center flex-col bg-violet-200">
        <div>
          <motion.div
            className="w-24 h-24 bg-blue-500 rounded-2xl"
            //   initial={false}
            animate={{ x: -90 }}
            transition={{ duration: 2 }}
            whileTap={{ scale: 0.5 }}
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>

        <motion.circle
          className="w-24 h-24 bg-green-500 rounded-2xl"
          cx={100}
          animate={{
            cx: [null, 100, 200],
            transition: { duration: 3, times: [0, 0.2, 1] },
          }}
        />

        <div className="w-24 h-24">
          <AnimatePresence>
            {isVisible ? (
              <MotionComponent
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.2,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4,
                  },
                }}
                exit={{ opacity: 0, x: -50 }}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default PracticeMotion;
