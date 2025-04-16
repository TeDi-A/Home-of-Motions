import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, animate, useAnimate } from "motion/react";

const projects = [
  { id: 1, name: "Cascade", path: "/cascade" },
  { id: 2, name: "Animate Entry", path: "/animateentry" },
  { id: 3, name: "Scroll X Box", path: "/scrollxbox" },
  { id: 4, name: "Notifications", path: "/notificationsapp" },
  { id: 5, name: "Slideshow", path: "/slideshow" },
  { id: 6, name: "Drag Transform", path: "/dragtransform" },
  { id: 7, name: "Stagger Nav", path: "/staggernav" },
  { id: 8, name: "Tab Switch", path: "/tabswitch" },
  //   { id: 9, name: "Drag Page", path: "/dragpage" },
  { id: 10, name: "Infinite Scroll", path: "/infinitescroll" },
  { id: 11, name: "Scroll to Full", path: "/scrolltofull" },
  //   { id: 12, name: "Mobile Logo", path: "/mobilelogo" },
  { id: 13, name: "Lighthouse", path: "/lighthouse" },
  //   { id: 14, name: "Carousel", path: "/carousel" },
  { id: 15, name: "Animate Count", path: "/animatecount" },
  { id: 16, name: "Text Scroll", path: "/textscroll" },
  { id: 17, name: "Move on Move", path: "/moveonmove" },
  { id: 18, name: "Page UI", path: "/pageui" },
  { id: 19, name: "Drag Carousel", path: "/dragcarousel" },
];

export default function Home() {
  const [gradientRef, gradient] = useAnimate();
  const [floatRef, float] = useAnimate();

  useEffect(() => {
    const motionElement = gradientRef.current;
    const floatElement = floatRef.current;

    const gradientAnimation = gradient(
      motionElement,
      { backgroundColor: ["#7B68EE", "#00CCCC", "#0076CE"] },
      {
        duration: 1.75,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }
    );

    const floatAnimation = float(
      floatElement,
      { scaleX: [0.9, 1.15] },
      // { y: ["10%", "-10%"] },
      {
        duration: 0.75,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
    );
    return () => {
      gradientAnimation.cancel();
      floatAnimation.cancel();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-white gap-4 p-6">
        <motion.div className="text-4xl md:text-7xl font-bold text-center">
          <motion.span
            ref={gradientRef}
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome
          </motion.span>{" "}
          to Home of {""}
          <motion.h1 ref={floatRef}>Motions</motion.h1>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-4 p-8">
          {projects
            .slice()
            .reverse()
            .map((project) => (
              <motion.span
                className="p-1"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Link
                  key={project.id}
                  to={project.path}
                  className="bg-blue-700 text-white p-2 rounded-lg m-4 font-bold"
                >
                  {project.name}
                </Link>
              </motion.span>
            ))}
        </div>
      </div>
    </>
  );
}
