import { motion, useScroll, useTransform } from "motion/react";

import { useRef } from "react";

export default function ParallaxBg() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const translateUp = useTransform(scrollYProgress, [0, 1], ["0", "125vh"]);
  const translateDown = useTransform(scrollYProgress, [0, 1], ["-15vh", "0vh"]);

  return (
    <div className="bg-wall w-screen h-[100lvh] bg-gray-950 ">
      <section className="section-1 ">
        <div className="imgContainer-1 w-[screen] h-screen overflow-hidden relative ">
          <motion.img
            ref={imgRef}
            src="../img-7.jpg"
            alt=""
            className="bg-cover bg-center w-full h-full absolute"
     
            style={{
              translateY: translateUp,
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        </div>
        <div className="textContainer-1 my-[20vh] p-20 text-[2.5rem] md:text-[3.75rem] font-bold text-center w-screen h-screen flex items-center justify-center bg-black text-white">
          PARALLAX BACKGROUND. <br /> THE FINAL MOTION PROJECT
        </div>
      </section>

      <section
        className="h-screen w-screen relative overflow-hidden"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="textContainer-2 h-screen w-screen p-20 text-[2rem] md:text-[3.75rem] font-bold text-center flex items-center justify-center bg-none text-white relative">
          LEAVING MOTION NOW...
        </div>

        <div className="imgContainer-2 w-screen h-[125vh] fixed top-[-10vh] -z-10">
          <motion.img
            src="../img-9.jpg"
            alt=""
            className="bg-cover bg-center w-full h-full absolute"
            style={{
              translateY: translateDown,
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        </div>
      </section>

      <section className="section-3">
        <div className="textContainer-1 my-[20vh] p-20 text-[2rem] md:text-[3.75rem] font-bold text-center w-screen h-screen flex items-center justify-center bg-black text-white">
          SAYONARA!
        </div>
      </section>
    </div>
  );
}
