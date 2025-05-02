import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AnimateText() {
  const textRef = useRef(null);

  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptas natus ducimus dolorum iusto incidunt atque nulla id, voluptatibus nam possimus saepe enim, quam, sunt quaerat suscipit? Dicta, cum. Iste.";

  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "start 0.3"],
  });

  const totalChars = text.replace(/\s/g, "").length;
  let globalCharIndex = 0;

  return (
    <div className="bg-black w-screen h-[100vh]">
      <div className="h-screen w-screen" />
      <motion.p
        ref={textRef}
        className="text-[2rem] font-bold bg-black text-white w-screen px-10 flex flex-wrap"
      >
        {words.map((word, i) => {
          return (
            <span key={i} className="inline-flex relative mr-4">
              {word.split("").map((char, j) => {
                const scrollStart = (globalCharIndex + 1) / totalChars;
                const scrollEnd = scrollStart + 1 / totalChars;
                globalCharIndex++;

                const opacity = useTransform(
                  [scrollYProgress],
                  [scrollStart, scrollEnd],
                  [0, 1]
                );

                return (
                  <>
                    <span className="relative">
                      <span className="opacity-10">{char}</span>
                      <motion.span
                        className="absolute top-0 left-0"
                        style={{ opacity }}
                      >
                        {char}
                      </motion.span>
                    </span>
                  </>
                );
              })}
            </span>
          );
        })}
      </motion.p>
      <div className="h-screen w-screen bg-black" />
    </div>
  );
}
