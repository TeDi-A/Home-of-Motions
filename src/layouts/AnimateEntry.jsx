import React, { useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  AnimatePresence,
  useTransform,
} from "motion/react";

const Card = ({ frontCard, setIndex, index }) => {
  //   const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    // exit: {
    //   opacity: 0,
    //   scale: 0.5,
    //   transition: { duration: 0.2 },
    // },
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };
  function handleDragMotion(_, info) {
    if (info.offset.x < -100) {
      //   setExitX(-250);
      setIndex(index + 1);
      console.log(index);
    }
    if (info.offset.x > 100) {
      //   setExitX(250);
      setIndex(index + 1);
    }
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 250,
        x,
        rotate,
        scale,
        cursor: "grab",
      }}
      className="card w-32 h-32 bg-white rounded-xl"
      whileTap={{ cursor: "grabbing" }}
      drag={true}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragMotion}
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      //   exit="exit"
      //   custom={exitX}
      //   transition={
      //     frontCard
      //       ? { type: "spring", stiffness: 300, damping: 20 }
      //       : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      //   }
    >
      <motion.div
      // style={{ scale }}
      />
    </motion.div>
  );
};
const AnimateEntry = () => {
  const [index, setIndex] = useState(0);
  return (
    <motion.div className="animate-entry h-screen flex flex-col justify-center items-center gap-4 bg-teal-900 relative" >
      <AnimatePresence>
        <Card key={index + 1} frontCard={false} />
        <Card
          key={index}
          frontCard={true}
          drag="x"
          index={index}
          setIndex={setIndex}
          
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimateEntry;
