import { motion } from "motion/react";
import { useState } from "react";

const carouselImages = [
  "../img-11.jpg",
  "../img-2.jpg",
  "../img-13.jpg",
  "../img-4.jpg",
  "../img-15.jpg",
  "../img-1.jpg",
  "../img-19.jpg",
  "../img-3.jpg",
  "../img-14.jpg",
  "../img-5.jpg",
];

export default function StaggerCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOnClick = (e) => {
    const clickedItem = e.currentTarget;
    const clickedIndex = Array.from(clickedItem.parentNode.children).indexOf(
      clickedItem
    );

    setSelectedIndex(clickedIndex);
    setIsAnimating(true);
  };

  return (
    <div className="carousel-container w-screen h-screen flex items-center justify-center bg-gray-900">
      <motion.ul className="carousel-list flex items-center h-full overflow-hidden w-[90vw] md:w-150 gap-4 ">
        {carouselImages.map((img, index) => {
          return (
            <motion.li
              key={index}
              className="carousel-item w-48 h-48 m-4 rounded-lg flex items-center justify-center text-white text-xl font-bold shrink-0 gap-2 cursor-pointer"
              animate={{
                translateX: `-${selectedIndex * 100}%`,
                y: selectedIndex === index ? -20 : 10,
                rotate: selectedIndex === index ? 0 : 5,
                opacity: selectedIndex === index ? 1 : 0.5,
                transition: {
                  duration: 0.05,
                  //   delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={handleOnClick}
            ></motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
