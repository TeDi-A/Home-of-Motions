import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const makeColor = (hue) => `hsl(${hue}, 100%, 40%)`;
const colors = Array.from({ length: 6 }, (_, i) => makeColor(i * 100));
const pages = ["A", "B", "C", "D", "E", "F"];

function Card({ color, page, index, setIndex }) {
  return (
    <motion.div className="card-content-container">
      <motion.div
        className="card-content"
        layoutId={color}
        onClick={() => setIndex(index)}
      >
        <motion.div
          className="bg-gray-600 w-32 h-32 rounded-2xl flex justify-center items-center text-5xl text-gray-200 font-bold cursor-pointer border-1 border-black"
          style={{ backgroundColor: color }}
          layoutId={`title-container-${index}`}
        >
          {page}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Gallery({ setIndex }) {
  return (
    <div className="w-3/4 h-full flex flex-wrap gap-4 justify-center items-center p-4 relative">
      {colors.map((color, index) => {
        return (
          <Card
            key={color}
            color={color}
            page={pages[index]}
            index={index}
            setIndex={setIndex}
          />
        );
      })}
    </div>
  );
}
function SinglePage({ index, handleOnClick }) {
  const color = colors[index];
  const page = pages[index];

  return (
    <motion.div
      className="card-content-container absolute w-3/4 z-30 p-8  "
      onClick={handleOnClick}
    >
      <motion.div
        className="card-content border-1 rounded-2xl overflow-hidden "
        layoutId={color}
      >
        <motion.div
          className="flex items-center justify-center h-[300px] text-5xl font-bold text-gray-200 cursor-pointer"
          style={{ backgroundColor: color }}
          layoutId={`title-container-${index}`}
        >
          {page}
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="content-container p-4 text-white"
            initial={false}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              maxime exercitationem eligendi ipsa eaque praesentium consequatur
              quos veniam consequuntur, nulla suscipit, accusantium cumque
              aperiam nam. Earum ex quis modi neque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda voluptates, cumque tenetur
              repudiandae similique eos aspernatur ratione iure. Aspernatur
              aliquam vel deserunt explicabo, est tempora nam assumenda neque?
              Culpa, cumque.
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function PageUI() {
  const [index, setIndex] = useState(null);
  const boxRef = useRef(null);

  return (
    <div>
      <div
        className="bg-gray-900 w-screen h-[100vh] flex flex-col items-center relative"
        ref={boxRef}
      >
        <Gallery setIndex={setIndex} selectedIndex={index} />
        <AnimatePresence>
          {index !== null && (
            <>
              <motion.div
                className="absolute page-overlay bg-gray-900 w-screen h-screen "
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                onClick={() => setIndex(null)}
              />
              <SinglePage
                key={index}
                index={index}
                handleOnClick={() => setIndex(null)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
