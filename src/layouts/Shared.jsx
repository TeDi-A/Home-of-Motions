import { motion, AnimatePresence } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const SharedLayout = () => {
  const [selectedTab, setSelectedTab] = useState([]);

  const [tomato, lettuce, cheese] = allIngredients;
  const tabs = [tomato, lettuce, cheese];
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-100">
      <div className="container flex flex-col w-100 h-100 border-2">
        <nav className="h-8 flex list-none gap-4 justify-around">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "#eee0",
              }}
              onClick={() => setSelectedTab(item)}
              className="cursor-pointer relative"
            >
              {`${item.icon}${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  layoutId="underline"
                  id="underline"
                  className="absolute top-8 left-0 right-0 bottom-2.5 bg-amber-500 h-1"
                />
              ) : null}
            </motion.li>
          ))}
        </nav>
        <AnimatePresence>
          <div className="content flex items-center justify-center h-100">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: 10 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SharedLayout;
