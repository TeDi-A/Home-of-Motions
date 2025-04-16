import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Card = ({ setNotificationItems, notificationItems, index }) => {
  function handleDeleteCard() {
    setNotificationItems(notificationItems.filter((_, i) => i !== index));
  }

  return (
    <motion.li
      className="card w-64 h-20 bg-white flex items-center rounded-xl"
      layout
      initial={{ x: 250, opacity: 0, scale: 0.3 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: 100, opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      <p className="ml-4 w-full text-center italic">New Notification</p>
      <Button content={"x"} onClick={handleDeleteCard} />
    </motion.li>
  );
};

const Button = ({ content, onClick }) => {
  return (
    <div
      className="add-btn font-bold   bg-white rounded-full w-16 h-16 flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

const CardContainer = ({ setNotificationItems, notificationItems }) => {
  return (
    <ul className="flex flex-col gap-4">
      <AnimatePresence>
        {notificationItems.map((id, index) => (
          <Card
            key={id}
            index={index}
            setNotificationItems={setNotificationItems}
            notificationItems={notificationItems}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

const NotificationsApp = () => {
  const [notificationItems, setNotificationItems] = useState([1]);

  function handleAddCard() {
    setNotificationItems((prev) => [...prev, prev.length + 1]);
  }

  return (
    <div className="notification-app bg-pink-600 w-screen h-screen flex flex-col justify-end items-end md:justify-between gap-4 p-12 ">
      <CardContainer
        setNotificationItems={setNotificationItems}
        notificationItems={notificationItems}
      />
      <Button onClick={handleAddCard} content={"+"} />
    </div>
  );
};

export default NotificationsApp;
