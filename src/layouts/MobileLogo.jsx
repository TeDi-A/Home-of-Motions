import { motion } from "motion/react";


const MobileLogo = () => {
  return (
    <>
      <div className="mobile-logo w-screen h-screen flex items-center justify-center bg-lime-950">
        <motion.div
          className="w-32 h-32 bg-white rounded-2xl absolute"
          animate={{}}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ top: -20, left: -20, rotate: 45, scale: 0.3 }}
        ></motion.div>
      </div>
    </>
  );
};

export default MobileLogo;
