"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Command } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type PaletteCommand = {
  label: string;
  href: string;
};

type CommandPaletteProps = {
  commands: PaletteCommand[];
};

export default function CommandPalette({ commands }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const withModifier = event.ctrlKey || event.metaKey;
      if (withModifier && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((state) => !state);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredCommands = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) {
      return commands;
    }
    return commands.filter((command) => command.label.toLowerCase().includes(text));
  }, [commands, query]);

  const runCommand = (href: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="interactive-cursor hidden items-center gap-2 rounded-lg border border-neutral-300/90 bg-white/90 px-3 py-2 text-xs font-medium text-neutral-700 hover:border-cyan-400 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-300 dark:hover:border-cyan-300 dark:hover:text-white md:inline-flex"
      >
        <Command size={14} />
        <span>Command</span>
        <span className="rounded border border-neutral-300 px-1.5 py-0.5 text-[10px] text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          Ctrl+K
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-start bg-neutral-950/50 px-4 pt-[16vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/20 dark:border-neutral-800 dark:bg-neutral-950"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Type a command..."
                  className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400 dark:text-neutral-200"
                  autoFocus
                />
              </div>
              <ul className="p-2">
                {filteredCommands.length ? (
                  filteredCommands.map((command) => (
                    <li key={command.href}>
                      <button
                        type="button"
                        onClick={() => runCommand(command.href)}
                        className="interactive-cursor flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
                      >
                        <span>{command.label}</span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{command.href}</span>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-4 text-sm text-neutral-500 dark:text-neutral-400">No command found</li>
                )}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
