import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleOver = (e) => {
      const isInteractive = !!e.target.closest(
        "a, button, [role='button'], input, textarea"
      );
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 1.6 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div
        className="w-8 h-8 rounded-full transition-opacity duration-200"
        style={{
          background: "#BB86FC",
          boxShadow: isHovering
            ? "0 0 28px 10px rgba(187, 134, 252, 0.75)"
            : "0 0 20px 6px rgba(187, 134, 252, 0.6)",
          opacity: isHovering ? 1 : 0.85,
        }}
      />
    </motion.div>
  );
};

export default CursorFollower;