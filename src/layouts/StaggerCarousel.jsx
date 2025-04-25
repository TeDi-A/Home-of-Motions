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
  const [images, setImages] = useState(carouselImages);
  const [selectedIndex, setSelectedIndex] = useState(4);

  let itemWidth;

  if (window.innerWidth > 768) {
    itemWidth = 200 + 20;
  } else {
    itemWidth = 100 + 20;
  }

  const handleOnClick = (index) => {
    // const updated = [...images];
    // const [clicked] = updated.splice(images.length + 1, 0, index);
    // updated.push(clicked);
    // setImages(updated);
    setSelectedIndex(index);

    // const offset = selectedIndex * -100%;
  };

  return (
    <div className="carousel-container w-screen h-screen flex items-center justify-center bg-gray-900">
      <motion.ul className="carousel-list relative overflow-hidden h-[500px] min-w-[300px] md:min-w-[500px]">
        {images.map((img, index) => {
          return (
            <motion.li
              key={index}
              className="carousel-item w-[100px] md:w-[200px] h-48 rounded-lg absolute left-1/3 top-1/3 cursor-pointer"
              animate={{
                translateX: (index - selectedIndex) * itemWidth,
                y: -50 + (selectedIndex === index ? -20 : 10),
                rotate: selectedIndex === index ? 0 : 5,
                opacity: selectedIndex === index ? 1 : 0.5,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // transform: "translateX(-50%)",  // Correct centering
              }}
              onClick={() => handleOnClick(index)}
            ></motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
