"use client";

import CustomCursor from "@/components/CustomCursor";
import EasterEggs from "@/components/EasterEggs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

const About = dynamic(() => import("@/components/About"), { loading: () => <SectionSkeleton /> });
const Projects = dynamic(() => import("@/components/Projects"), { loading: () => <SectionSkeleton /> });
const Skills = dynamic(() => import("@/components/Skills"), { loading: () => <SectionSkeleton /> });
const Achievements = dynamic(() => import("@/components/Achievements"), { loading: () => <SectionSkeleton /> });
const Contact = dynamic(() => import("@/components/Contact"), { loading: () => <SectionSkeleton /> });

function SectionSkeleton() {
  return (
    <div className="section-shell">
      <div className="skeleton-line h-8 w-40 rounded-lg" />
      <div className="mt-4 space-y-3 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="skeleton-line h-5 w-full rounded-md" />
        <div className="skeleton-line h-5 w-5/6 rounded-md" />
        <div className="skeleton-line h-5 w-4/6 rounded-md" />
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div>
      <CustomCursor />
      <EasterEggs />
      <motion.main
        className="mx-auto w-full max-w-6xl px-6 pb-12 pt-4 sm:px-10 sm:pt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Hero />
        <About />
        <Projects highlightSkill={selectedSkill} />
        <Skills selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
        <Achievements />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
