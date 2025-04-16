import { motion, useTransform, useScroll } from "motion/react";
import { useRef, useEffect } from "react";

const Carousel = () => {
  const containerRef = useRef(null);
  const { scrollX } = useScroll({ container: containerRef });

  const carouselDiv = ["A", "B", "C", "D", "E"];
  const carouselCol = [
    "bg-orange-700",
    "bg-teal-700",
    "bg-blue-700",
    "bg-lime-700",
    "bg-pink-700",
  ];

  const carouselItems = [...carouselDiv, ...carouselDiv];
  const carouselColors = [...carouselCol, ...carouselCol];

  const itemWidth = 200;
  const gap = 16;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const step = 100;
    const delay = 1000;
    let requestId;

    const scrollLoop = () => {
      if (!container) return;
      scrollAmount += step;
      container.scrollLeft  += step;
      console.log(scrollAmount, container.scrollWidth);

      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }

      requestId = window.setTimeout(scrollLoop, delay);
    };

    // scrollLoop();

    return () => window.clearTimeout(requestId);
  }, []);

  return (
    <div className="carousel-container bg-violet-950 w-screen h-screen flex items-center justify-center">
      <motion.ul
        ref={containerRef}
        className="carousel-list flex items-center h-full overflow-x-scroll w-125 scroll-smooth snap-x snap-mandatory"
      >
        {carouselItems.map((item, index) => {
          const itemOffset = index * (itemWidth + gap);

          const centerOffset = useTransform(scrollX, (scrollLeft) => {
            const scrollCenter = scrollLeft + window.innerWidth / 2;
            const itemCenter = itemOffset + itemWidth / 2;
            return Math.abs(scrollCenter - itemCenter + scrollLeft);
          });

          const width = useTransform(centerOffset, [0, 300], [400, 100]);

          return (
            <motion.li
              key={index}
              className={`carousel-item ${carouselColors[index]} snap-start h-1/3 flex text-2xl items-center justify-center text-white shrink-0 font-bold rounded-xl`}
              style={{ width, marginRight: "10px", padding: "10px" }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Carousel;
