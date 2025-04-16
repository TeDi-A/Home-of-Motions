import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const pages = [1, 2, 3, 4, 5];

export default function DragPage() {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  return (
    <div className="w-screen h-screen bg-pink-950 flex justify-center items-center">
      <motion.ul
        ref={containerRef}
        className="border-4 p-4 overflow-hidden  flex cursor-grab w-42 "
      >
        {pages.map((_, index) => {
          const itemOffset = -index * 150;
          const offset = useTransform(
            x,
            [itemOffset - 150, itemOffset, itemOffset + 150],
            [-1, 0, 1]
          );
          const itemOpacity = useTransform(offset, [-1, 0, 1], [0.4, 1, 0.4]);
          const itemScale = useTransform(offset, [-1, 0, 1], [0.5, 1, 0.5]);
          {
            /* const itemX = useTransform(offset, [-1, 0, 1], [20, 0, -20]); */
          }

          return (
            <motion.li
              key={index}
              drag="x"
              dragConstraints={{ left: -550, right: 0 }}
              className="bg-white rounded-2xl w-32 h-32 flex-shrink-0"
              style={{
                opacity: itemOpacity,
                scale: itemScale,
                // x: itemX,
                x,
              }}
            />
          );
        })}
      </motion.ul>
    </div>
  );
}
