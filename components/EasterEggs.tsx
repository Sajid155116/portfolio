"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

export default function EasterEggs() {
  const [message, setMessage] = useState("");
  const [messageDuration, setMessageDuration] = useState(2600);
  const typedRef = useRef("");
  const konamiRef = useRef<string[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (message) {
        setMessage("");
      }
    }, messageDuration);

    return () => window.clearTimeout(timeout);
  }, [message, messageDuration]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      const key = event.key.toLowerCase();

      if (key.length === 1 && /[a-z]/.test(key)) {
        typedRef.current = (typedRef.current + key).slice(-20);
        if (typedRef.current.includes("sajid")) {
          document.body.classList.add("easter-sajid");
          setMessageDuration(4200);
          setMessage("You found the hidden signature");
          window.setTimeout(() => document.body.classList.remove("easter-sajid"), 2500);
          typedRef.current = "";
        }
      }

      konamiRef.current = [...konamiRef.current, key].slice(-KONAMI.length);
      if (konamiRef.current.join(",") === KONAMI.join(",")) {
        document.body.classList.add("easter-konami");
        setMessageDuration(4800);
        setMessage("Konami unlocked: chaos mode");
        window.setTimeout(() => document.body.classList.remove("easter-konami"), 4000);
        konamiRef.current = [];
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          className="pointer-events-none fixed bottom-5 left-1/2 z-[95] -translate-x-1/2 rounded-full border border-cyan-300 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-neutral-800 shadow-lg shadow-cyan-300/20 backdrop-blur dark:border-cyan-700 dark:bg-neutral-900/90 dark:text-neutral-100"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 18, opacity: 0 }}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
