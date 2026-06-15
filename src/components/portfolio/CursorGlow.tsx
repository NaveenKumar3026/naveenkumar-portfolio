import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button'], input, textarea"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-glow pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen"
        animate={{
          x: pos.x - (hovering ? 24 : 8),
          y: pos.y - (hovering ? 24 : 8),
          width: hovering ? 48 : 16,
          height: hovering ? 48 : 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.8), hsl(var(--secondary) / 0.4) 60%, transparent)",
        }}
      />
      <motion.div
        className="cursor-glow pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary-foreground"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", damping: 50, stiffness: 1000, mass: 0.1 }}
      />
    </>
  );
};

export default CursorGlow;
