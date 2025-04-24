import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const InfiniteScroll = () => {
  const [listItems, setListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hueRef = useRef(0);
  const hueStep = 10;
  const count = 12;

  const generateList = (count) => {
    let newList = [];
    for (let i = 0; i < count; i++) {
      newList.push({ color: `hsl(${hueRef.current}, 100%, 60%)` });
      hueRef.current += hueStep;
    }
    return newList;
  };

  useEffect(() => {
    setListItems(generateList(count));
  }, []);

  const fetchList = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setListItems((prevItems) => [...prevItems, ...generateList(count)]);
    }, 1000);
  };

  return (
    <div className="infinite-scroll w-screen h-screen bg-fuchsia-950 overflow-scroll p-8 flex items-center gap-4 flex-col">
      <ul className="flex flex-wrap gap-6 justify-center">
        <AnimatePresence>
          {listItems.map(({ color }, i) => (
            <motion.li
              key={i}
              style={{ backgroundColor: color }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className=" w-32 h-32 md:w-64 md:h-64 rounded-2xl"
            />
          ))}
        </AnimatePresence>
      </ul>

      <motion.button
        key={listItems.length}
        viewport={{ once: true, margin: "0px", fallback: false }}
        onViewportEnter={fetchList}
        onClick={() => fetchList()}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-4 py-2 rounded-xl w-32"
      >
        {isLoading ? "Loading..." : "Load More"}
      </motion.button>
    </div>
  );
};

export default InfiniteScroll;
