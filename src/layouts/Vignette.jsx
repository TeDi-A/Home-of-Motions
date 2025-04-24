import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { s } from "motion/react-client";

const backgrounds = [
  "../img-10.jpg",
  "../img-12.jpg",
  "../img-19.jpg",
  "../img-8.jpg",
  "../img-11.jpg",
];

export default function Vignette() {

    const spring = {
        stiffness: 300,
        damping: 30,    
        mass: 0.5,
    }
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const offsetX = useTransform(
    mousePosition.x,
    (val) => val - window.innerWidth * 0.1
  );
  const offsetY = useTransform(
    mousePosition.y,
    (val) => val - window.innerHeight * 0.2
  );

  const mouseMove = (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;

    mousePosition.x.set(xPos);
    mousePosition.y.set(yPos);
  };

  return (
    <>
      <div
        className="vignette w-screen h-screen bg-lime-950 "
        onMouseMove={(e) => {
          mouseMove(e);
        }}
      >
        {backgrounds.map((img, index) => (
          <div
            key={index}
            className="relative"
            style={{
              clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
            }}
          >
            <motion.div
              className="img-box bg-cover bg-center w-full h-[120vh] relative"
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></motion.div>
            <motion.div
              className="vignette bg-cover bg-center w-[20vw] h-[40vh] fixed top-0 rounded-sm"
              style={{
                backgroundImage: `url(${img})`,
                x: offsetX,
                y: offsetY,
              }}
            ></motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
