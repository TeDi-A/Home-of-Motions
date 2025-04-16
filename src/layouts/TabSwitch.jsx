import { useState } from "react";
import { motion } from "motion/react";

const tabs = [
  { name: "Red", color: "#f00" },
  { name: "Purple", color: "#b1f" },
  { name: "Orange", color: "#f90" },
  { name: "Green", color: "#0c0" },
];

const duration = 0.21;

function TabSwitch() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="bg-emerald-950 w-screen h-screen flex justify-center items-center">
      <div style={containerStyle}>
        {tabs.map(({ name, color }, index) => (
          <motion.div
            key={index}
            style={tabStyle}
            transition={{ duration }}
            onTap={() => {
              setSelectedTab(tabs[index]);
            }}
            animate={{
              color: `${name === selectedTab.name ? "#fff" : "#000"}`,
            }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>{name}</span>
            {name === selectedTab.name && (
              <motion.div
                style={selectionStyle}
                layoutId="selectedTab"
                animate={{ backgroundColor: color }}
                transition={{ duration }}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  position: "relative",
  borderRadius: 21,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  padding: 6,
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
};

const tabStyle = {
  height: 30,
  position: "relative",
  padding: "3px 15px",
  margin: 0,
  fontFamily: "sans-serif",
  fontSize: 20,
  fontWeight: 700,
  color: "#222",
  cursor: "pointer",
};

const selectionStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: 15,
  top: 0,
  left: 0,
};

export default TabSwitch;
