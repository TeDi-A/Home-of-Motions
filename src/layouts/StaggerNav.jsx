import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function StaggerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };
  return (
    <div className="w-screen h-screen bg-violet-950 flex justify-center items-center">
      <div className="nav-menu w-96 h-64">
        <motion.div
          className="navbar w-full h-16 bg-white rounded-2xl flex justify-between items-center px-4 font-bold"
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            isOpen === false ? setIsOpen(true) : setIsOpen(false)
          }
        >
          <p className="text-violet-950">Menu</p>
          <svg className="arrow" width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="w-full bg-white rounded-2xl flex flex-col gap-6 p-4 font-bold "
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.5,
                    staggerChildren: 0.1,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
            >
              <motion.li variants={itemVariants}>Item 1</motion.li>
              <motion.li variants={itemVariants}>Item 2</motion.li>
              <motion.li variants={itemVariants}>Item 3</motion.li>
              <motion.li variants={itemVariants}>Item 4</motion.li>
              <motion.li variants={itemVariants}>Item 5</motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default StaggerNav;
