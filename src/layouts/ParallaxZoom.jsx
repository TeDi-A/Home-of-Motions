import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxZoom() {
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

  const scaleImgA = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const itemWidth = window.innerWidth * 0.25;
  const itemHeight = window.innerHeight * -0.7;
  const itemRight = window.innerWidth * -0.15;

  const WallX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerWidth * -1 - itemWidth - itemRight]
  );
  const WallY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * -1 - itemHeight]
  );
  const scaleImgB = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const scaleImgC = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  return (
    <>
      <div className=" justify-center pt-[100vh] w-screen h-[400vh] bg-zinc-900 text-white ">
        <div
          ref={imgRef}
          className="sticky-container h-[200vh] w-screen relative bg-black overflow-hidden"
        >
          <motion.div
            className="sticky-content h-screen w-screen sticky top-0  "
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
                className="star-img w-[25vw] h-[30vh] absolute right-[10vw] bottom-0 translate-y-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${imgs[3]})` }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="image-container top-0 absolute w-full h-full "
              style={{ scale: scaleImgC }}
            >
              <motion.div
                className="surround-img w-[20vw] h-[30vh] absolute left-0 top-1/2 translate-x-1/2  -translate-y-1/2 bg-center bg-cover"
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
                className="surround-img w-[20vw] h-[30vh] absolute left-10 top-0 -translate-x-0 -translate-y-0 bg-center bg-cover"
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
    </>
  );
}
