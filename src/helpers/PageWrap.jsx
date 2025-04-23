import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const withFade = (Component) => <PageWrapper>{Component}</PageWrapper>;
