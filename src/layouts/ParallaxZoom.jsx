import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { frame, cancelFrame } from "motion/react";


export default function ParallaxZoom() {
  const lenisRef = useRef(null);
  useEffect(() => {
    const update = ({ timestamp }) => {
      lenisRef.current?.lenis?.raf(timestamp);
    };
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);


  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start start", "end end"],
  });
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
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const itemWidth = window.innerWidth * -0.25;
  const itemRight = window.innerWidth * -0.2;
  const itemBottom = window.innerHeight * -0.05;
  const itemHeight = window.innerHeight * -0.25;

  const WallX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, windowWidth * -0.65 + itemWidth - itemRight]
    // - itemWidth + itemRight + windowWidth
  );
  const WallY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, windowHeight * 0.4 - itemHeight - itemBottom]
    // - itemHeight + itemBottom + windowHeight
  );

  //   const translateImgX = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  //   const translateImgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
        smoothTouch: true,
        smoothWheel: true,
        wheelMultiplier: 2,
        touchMultiplier: 2,
        lerp: 0.1,
        autoRaf: true,
      }}
    >
      <div className=" justify-center pt-[100vh] w-screen h-[500dvh] bg-black text-white ">
        <div
          ref={imgRef}
          className="sticky-container h-[300dvh] w-screen relative bg-zinc-950 overflow-hidden "
        >
          <motion.div
            className="sticky-content h-screen w-screen sticky top-0 "
            style={{ scale: scaleImgA, translateX: WallX, translateY: WallY }}
          >
            <motion.div
              className="image-container top-0 absolute w-full h-full border-0"
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className="center-img w-[25vw] h-[25vh] relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[0]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container top-0 absolute w-full h-full "
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className="surround-img w-[25vw] h-[60vh] absolute right-0 top-1/3 -translate-x-1/3 -translate-y-1/2 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[1]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container top-0 absolute w-full h-full "
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="surround-img w-[20vw] h-[30vh] absolute left-2/5 bottom-0 -translate-x-1/2 translate-y-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[2]})` }}
              ></motion.div>
            </motion.div>

            <motion.div className="image-container top-0 absolute w-full h-full ">
              <motion.div
                className="star-img w-[25vw] h-[25vh] absolute right-[20vw] bottom-[5vh] bg-center bg-cover"
                style={{
                  backgroundImage: `url(${imgs[3]})`,
                }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container top-0 absolute w-full h-full "
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="surround-img w-[20vw] h-[25vh] absolute left-0 top-1/2 translate-x-1/2  -translate-y-1/2 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[4]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container top-0 absolute w-full h-full "
              style={{ scale: scaleImgB }}
            >
              <motion.div
                className="surround-img w-[25vw] h-[30vh] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[5]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container top-0 absolute w-full h-full "
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="surround-img w-[20vw] h-[30vh] absolute left-0 top-0 translate-x-1/2  -translate-y-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[6]})` }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="dummy-content relative h-screen text-white flex flex-col p-12 gap-4 items-center justify-center">
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
