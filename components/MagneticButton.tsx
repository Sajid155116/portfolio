"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: "solid" | "outline";
};

export default function MagneticButton({
  href,
  label,
  variant = "solid",
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const isSolid = variant === "solid";

  return (
    <motion.a
      href={href}
      className={
        isSolid
          ? "magnetic-btn rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white dark:bg-cyan-400 dark:text-neutral-950"
          : "magnetic-btn rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
      }
      animate={offset}
      transition={{ type: "spring", stiffness: 280, damping: 18, mass: 0.35 }}
      onMouseMove={(event) => {
        const target = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - target.left - target.width / 2) * 0.18;
        const y = (event.clientY - target.top - target.height / 2) * 0.18;
        setOffset({ x, y });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.a>
  );
}
