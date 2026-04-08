"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
};

const interactiveSelector =
  "a, button, input, textarea, [role='button'], .interactive-cursor";

export default function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const pointerMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
      setVisible(true);
      const target = event.target as Element | null;
      setActive(Boolean(target?.closest(interactiveSelector)));
    };

    const pointerLeave = () => setVisible(false);

    window.addEventListener("mousemove", pointerMove);
    document.addEventListener("mouseleave", pointerLeave);

    return () => {
      window.removeEventListener("mousemove", pointerMove);
      document.removeEventListener("mouseleave", pointerLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-cyan-400 mix-blend-difference md:block"
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          scale: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 30, mass: 0.12 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden rounded-full border border-cyan-400/80 md:block"
        animate={{
          x: cursor.x - (active ? 25 : 17),
          y: cursor.y - (active ? 25 : 17),
          width: active ? 50 : 34,
          height: active ? 50 : 34,
          opacity: visible ? 0.9 : 0,
        }}
        transition={{ type: "spring", stiffness: 460, damping: 30, mass: 0.24 }}
      />
    </>
  );
}
