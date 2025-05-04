import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

export default function Cards() {
  const cardsRef = useRef(null);
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

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className=" flex flex-col justify-center w-screen bg-gray-950 text-white">
      <section ref={cardsRef} className="w-screen h-[300vh] relative ">
        <div className=" flex justify-center w-screen h-screen overflow-hidden sticky top-0">
          {content.map((item, index) => {
            const originY = (index + 1) * window.innerHeight;
            const scrollFinal = (index + 1) / content.length;
            const translateCardY = useTransform(
              scrollYProgress,
              [0, scrollFinal],
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
                className="w-[85vw] h-[25vh] absolute top-[25vh] flex flex-colitems-center justify-center"
                animate={{
                  y: 20,
                }}
                style={{ translateY: translateCardY, scale: scaleCard }}
              >
                <motion.div
                  className={`flex flex-col items-center justify-between w-full h-[300px] rounded-lg overflow-hidden ${item.color}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-6 text-center w-1/2 h-[15vh]">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="textcontent text-4xl md:text-6xl font-bold w-screen h-screen relative flex items-center justify-center bg-black ">
        <p>COOL CARDS!!</p>
      </section>
    </div>
  );
}
