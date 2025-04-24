import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";

const imgs = [
  "../img-1.jpg",
  "../img-2.jpg",
  "../img-3.jpg",
  "../img-4.jpg",
  "../img-5.jpg",
];

export default function DragCarousel() {
  const [ImgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imgs.length);
    }, 5000);

    return () => clearInterval(intervalRef);
  }, []);

  function handleOnDragEnd() {
    const dragXVal = dragX.get();

    if (dragXVal > 70 && ImgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    } else if (dragXVal < -70 && ImgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    }
  }

  return (
    <>
      <div className="carousel-land w-screen h-screen flex justify-center items-center bg-gray-950">
        <div className="carousel-frame border-2 border-gray-600 w-4/5 rounded-2xl relative flex items-center overflow-hidden">
          <motion.div
            drag="x"
            style={{ x: dragX }}
            animate={{
              translateX: `-${ImgIndex * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            onDragEnd={handleOnDragEnd}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            className="carousel-content w-full h-[500px] cursor-grab active:cursor-grabbing flex"
          >
            <Images ImgIndex={ImgIndex} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

const Images = ({ ImgIndex }) => {
  return (
    <>
      {imgs.map((img, index) => (
        <motion.div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
          }}
          animate={{ scale: ImgIndex === index ? 0.95 : 0.85 }}
          className=" bg-cover w-full h-full bg-center shrink-0 "
        ></motion.div>
      ))}
    </>
  );
};
