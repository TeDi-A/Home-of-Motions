import { motion, useScroll, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

const TextScroll = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: textRef });
  const scrollPage = [0, 0.5, 1];
  const scrollTextA = [500, 0, -500];
  const scrollTextB = [-500, 0, 500];
  const opacity = [0, 1, 0];

  const moveTextA = useTransform(scrollYProgress, scrollPage, scrollTextA);
  const moveTextB = useTransform(scrollYProgress, scrollPage, scrollTextB);
  const fadeText = useTransform(scrollYProgress, scrollPage, opacity);

  return (
    <div
      ref={textRef}
      className="text-scroll bg-cyan-900 w-screen h-[300vh] relative"
    >
      <div className="text-container sticky top-[40vh] flex flex-col gap-20 w-full text-center  overflow-hidden">
        <motion.div
          className=""
          style={{ x: moveTextA, opacity: fadeText }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <p className="text-5xl text-white font-bold text-nowrap">
            Create Your Experience
          </p>
        </motion.div>
        <motion.div className=" " style={{ x: moveTextB, opacity: fadeText }}>
          <p className="text-5xl text-white font-bold text-nowrap">
            Just The Way You Like It
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TextScroll;
