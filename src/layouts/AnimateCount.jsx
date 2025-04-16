import {
  motion,
  useTransform,
  useMotionValue,
  animate,
  inView,
} from "motion/react";

import { useEffect } from "react";

const AnimateCount = () => {
  const count = useMotionValue(0);
  const opacity = useTransform(count, [0, 100], [0, 1]);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const box = document.querySelector(".count-number");
    inView(box, () => {
      animate(count, 100, {
        duration: 3,
        onUpdate: (latest) => {
        },
      });
    });
  }, []);

  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-violet-800">
      <motion.div
        className="count-number text-9xl font-bold text-white"
        style={{ opacity }}
      >
        {rounded}
      </motion.div>
    </div>
  );
};

export default AnimateCount;
