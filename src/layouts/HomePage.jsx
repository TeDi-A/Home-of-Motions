import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-white gap-4 p-6">
        <motion.div className="text-4xl font-bold text-center">
          Welcome to Home of Motions
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-4 p-8">
          {projects
            .slice()
            .reverse()
            .map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 font-bold"
              >
                {project.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
