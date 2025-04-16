import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function StaggerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  const navVariants = {
    open: {
      height: 250,
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  return (
    <div className="w-screen h-screen bg-violet-950 flex justify-center items-center">
      <div className="nav-menu w-96 flex flex-col gap-4">
        <motion.div
          className="navbar w-full h-16 bg-white rounded-2xl flex justify-between items-center px-4 font-bold"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="text-violet-950">Menu</p>
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
            style={{ originY: 0.5 }}
          >
            <svg className="arrow" width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="w-full bg-white rounded-2xl flex flex-col gap-6 p-4 font-bold "
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
            >
              {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map(
                (item, index) => (
                  <motion.li
                    className="h-[24px]"
                    key={index}
                    variants={itemVariants}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default StaggerNav;
