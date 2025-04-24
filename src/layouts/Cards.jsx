import { motion, useTransform, useScroll } from "motion/react";

export default function Cards() {
  const imgs = [
    "../img-18.jpg",
    "../img-12.jpg",
    "../img-9.jpg",
    "../img-14.jpg",
    "../img-13.jpg",
  ];

  const colors = [
    "bg-red-900",
    "bg-blue-900",
    "bg-teal-900",
    "bg-green-900",
    "bg-amber-900",
  ];

  const content = [
    {
      title: "Title 1",
      description: "Description 1",
      img: imgs[0],
      color: colors[0],
    },
    {
      title: "Title 2",
      description: "Description 2",
      img: imgs[1],
      color: colors[1],
    },
    {
      title: "Title 3",
      description: "Description 3",
      img: imgs[2],
      color: colors[2],
    },
    {
      title: "Title 4",
      description: "Description 4",
      img: imgs[3],
      color: colors[3],
    },
    {
      title: "Title 5",
      description: "Description 5",
      img: imgs[4],
      color: colors[4],
    },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <div className="flex justify-center w-screen h-[300dvh] bg-gray-900 text-white relative">
      {content.map((item, index) => {
        const originY = (index + 1) * window.innerHeight;

        const translateCardY = useTransform(
          scrollYProgress,
          [0, (index + 1) / content.length],
          [originY + "px", (index + 1) * 20 + "px"]
        );

        const scaleCard = useTransform(
          scrollYProgress,
          [0, 1],
          [1, 0.8 + (index / content.length) * 0.2]
        );

        return (
          <motion.div
            key={index}
            className="w-4/5 h-[400px] fixed top-0 flex items-center justify-center"
            animate={{
              y: 20,
            }}
            style={{ translateY: translateCardY, scale: scaleCard }}
          >
            <motion.div
              className={`flex flex-row items-center justify-between w-full h-[300px] rounded-lg overflow-hidden ${item.color}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-1/2 h-full object-cover"
              />
              <div className="p-4 text-center w-1/2">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
