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

  const WallX = useTransform(scrollYProgress, [0, 0], [0, 0]);
  const WallY = useTransform(scrollYProgress, [0, 0], [0, 0]);

  const scaleImgA = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleImgB = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scaleImgC = useTransform(scrollYProgress, [0, 1], [1, 1]);
  return (
    <ReactLenis
      root
      options={
        {
          // duration: 0.5,
          // easing: (t) => 1 - Math.pow(1 - t, 2), // easeOutQuad
          // smooth: true,
          // wheelMultiplier: 1.25,
          // touchMultiplier: 1.25,
          // lerp: 0.05,
          // autoRaf: false,
        }
      }
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
                className=" w-full h-full bg-center bg-cover"
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
