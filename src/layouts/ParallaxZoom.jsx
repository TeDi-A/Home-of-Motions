import {
  motion,
  useScroll,
  useTransform,
  frame,
  cancelFrame,
} from "motion/react";

import { useRef, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

const imgs = [
  "../img-13.jpg",
  "../img-14.jpg",
  "../img-12.jpg",
  "../img-16.jpg",
  "../img-17.jpg",
  "../img-18.jpg",
  "../img-19.jpg",
  "../img-15.jpg",
];

export default function ParallaxZoom() {
  const lenisRef = useRef(null);
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = ({ timestamp }) => {
      lenisRef.current?.lenis?.raf(timestamp);
    };
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const windowWidth = viewport.width;
  const windowHeight = viewport.height;

  const itemWidth = viewport.width * -0.25;
  const itemRight = viewport.width * -0.2;
  const itemBottom = viewport.height * -0.05;
  const itemHeight = viewport.height * -0.25;

  const WallX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );
  const WallY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );

  const scaleImgA = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleImgB = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scaleImgC = useTransform(scrollYProgress, [0, 1], [1, 3]);
  return (
    <ReactLenis
      root
      options={{
        duration: 0.5,
        easing: (t) => 1 - Math.pow(1 - t, 2), // easeOutQuad
        smooth: true,
        wheelMultiplier: 1.25,
        touchMultiplier: 1.25,
        lerp: 0.05,
        autoRaf: false,
      }}
      ref={lenisRef}
    >
      <div className=" justify-center pt-[100vh] w-screen bg-black text-white ">
        <div
          ref={imgRef}
          className="sticky-container h-[300vh] w-screen relative bg-zinc-900 overflow-hidden "
        >
          <motion.div
            className="sticky-content h-screen w-screen sticky top-0"
            style={{ scale: scaleImgA, translateX: WallX, translateY: WallY }}
          >
            <motion.div
              className="image-container w-[25vw] h-[25vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className="center-img w-full h-full bg-center  bg-cover"
                style={{ backgroundImage: `url(${imgs[0]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[25vw] h-[60vh] absolute right-0 top-1/3 -translate-x-1/3 -translate-y-1/2 border-2"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className=" w-full h-full  bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[1]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[20vw] h-[30vh] absolute left-2/5 bottom-0 -translate-x-1/2 translate-y-0 border-2"
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[2]})` }}
              ></motion.div>
            </motion.div>

            <motion.div className="image-container w-[25vw] h-[25vh] absolute right-[20vw] bottom-[5vh] border-2">
              <motion.div
                className="star-img w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${imgs[3]})`,
                }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[20vw] h-[25vh] absolute left-0 top-1/2 translate-x-1/2  -translate-y-1/2 border-2"
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[4]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container absolute w-[25vw] h-[30vh] left-1/2 top-0 -translate-x-1/2 -translate-y-0 border-2"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className=" w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[5]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[20vw] h-[30vh] absolute left-0 top-0 translate-x-1/2  -translate-y-0  border-2"
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[6]})` }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ReactLenis>
  );
}
