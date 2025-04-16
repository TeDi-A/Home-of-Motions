// import { motion, useViewportScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

const ScrollToFull = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollLevel = [0, 0.95];
  const scale = [0.55, 1.25];
  const yVal = [280, 0];

  const loadItem = useTransform(scrollYProgress, scrollLevel, scale);
  const yLevel = useTransform(scrollYProgress, scrollLevel, yVal);

  return (
    <>
      <div
        className="bg-gray-800 w-screen h-[300vh] flex justify-center z-50 p-20"
        ref={ref}
      >
        <motion.div
          className="wrapper w-64 h-64 rounded-2xl border-2 sticky top-[35%] overflow-hidden bg-gray-600"
          style={{ scale: loadItem }}
        >
          <motion.div
            className="bg-white w-[inherit] h-[inherit] origin-bottom"
      
            style={{ y: yLevel }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ScrollToFull;
