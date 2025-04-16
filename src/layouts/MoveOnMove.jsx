import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import "../styles/Glowbox.css";

export default function MoveOnMove() {


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const screenCenterX = window.innerWidth / 2;
  const screenCenterY = window.innerHeight / 2;

  const rotateX = useTransform(
    y,
    [screenCenterY - 200, screenCenterY, screenCenterY + 200],
    [45, 0, -45]
  );
  const rotateY = useTransform(
    x,
    [screenCenterX - 200, screenCenterX, screenCenterX + 200],
    [-45, 0, 45]
  );

  function handleMouse(event) {
    const moveBox = document.querySelector(".move-box");
    const rect = moveBox.getBoundingClientRect();

    let xPos = event.clientX - rect.left;
    let yPos = event.clientY - rect.top;

    xPos = Math.max(0, Math.min(rect.width, xPos));
    yPos = Math.max(0, Math.min(rect.height, yPos));

    moveBox.style.setProperty("--x", `${xPos}px`);
    moveBox.style.setProperty("--y", `${yPos}px`);

    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <div>
      <div
        ref={boxRef}
        className="panel bg-black flex-col z-10"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          perspective: 500,
        }}
        onMouseMove={handleMouse}
      >
        <div className="h-full flex items-center">
          <motion.div
            className="move-box "
            style={{
              width: 250,
              height: 250,
              borderRadius: 30,
              backgroundColor: "#0f4d00",
              rotateX,
              rotateY,
            }}
          />
        </div>
       
      </div>
    </div>
  );
}
