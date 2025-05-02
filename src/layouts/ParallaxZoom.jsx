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

  const itemWidth = viewport.width * 0.25;
  const itemRight = viewport.width * 0.2;
  const itemBottom = viewport.height * 0.05;
  const itemHeight = viewport.height * 0.25;

  const WallX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, windowWidth * -1 + itemWidth + itemRight / 4]
  );
  const WallY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, windowHeight * 1 - itemHeight - itemBottom]
  );

  const scaleImgA = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleImgB = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const scaleImgC = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  return (
    <ReactLenis root options={{}} ref={lenisRef}>
      <div className=" justify-center pt-[100svh] w-screen bg-black text-white ">
        <div
          ref={imgRef}
          className="sticky-container h-[300svh] w-screen relative bg-zinc-950 overflow-hidden "
        >
          <motion.div
            className="sticky-content h-[100svh] w-screen sticky top-0 will-change-transform"
            style={{ scale: scaleImgA, translateX: WallX, translateY: WallY }}
          >
            <motion.div
              className="image-container w-[25vw] h-[25svh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  will-change-transform"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className="center-img w-full h-full bg-center  bg-cover"
                style={{ backgroundImage: `url(${imgs[0]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[25vw] h-[60svh] absolute right-0 top-1/3 -translate-x-1/3 -translate-y-1/2  will-change-transform"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className=" w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[1]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[20vw] h-[30svh] absolute left-2/5 bottom-0 -translate-x-1/2 translate-y-0  will-change-transform"
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[2]})` }}
              ></motion.div>
            </motion.div>

            <motion.div className="image-container w-[25vw] h-[25svh] absolute right-[20vw] bottom-[5svh]  will-change-transform">
              <motion.div
                className="star-img w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${imgs[3]})`,
                }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[20vw] h-[25svh] absolute left-0 top-1/2 translate-x-1/2  -translate-y-1/2  will-change-transform"
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[4]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container absolute w-[25vw] h-[30svh] left-1/2 top-0 -translate-x-1/2 -translate-y-0  will-change-transform"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className=" w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[5]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container w-[20vw] h-[30svh] absolute left-0 top-0 translate-x-1/2  -translate-y-0   will-change-transform"
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[6]})` }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="dummy-content relative bg-lime-950 h-screen text-white flex flex-col p-12 gap-4 items-center justify-center">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            qui! Rerum, ab maxime? Eius deserunt vero fuga alias sunt dolore
            minima explicabo debitis, inventore excepturi. Maxime repellendus
            cupiditate quibusdam rem.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
}
