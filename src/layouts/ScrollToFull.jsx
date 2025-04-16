// import { motion, useViewportScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

const ScrollToFull = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollLevel = [0, 1];
  const scale = [0.5, 1.5];
  const yVal = [300, 0];

  const loadItem = useTransform(scrollYProgress, scrollLevel, scale);
  const yLevel = useTransform(scrollYProgress, scrollLevel, yVal);

  return (
    <>
      <div
        className="bg-gray-800 w-screen h-[300vh] flex justify-center z-50 p-20"
        ref={ref}
      >
        <motion.div
          className="wrapper w-64 h-64 rounded-2xl border-2 sticky top-[40%] overflow-hidden bg-gray-600"
          style={{ scale: loadItem }}
        >
          <motion.div
            className="bg-white w-[inherit] h-[inherit] origin-bottom"
            // initial={{ marginTop: 1000 }}
            style={{ y: yLevel }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ScrollToFull;
