
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Code2,
  Sparkles,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const roles = [
  "Junior Software Engineer",
  "Web Developer",
  ".NET Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070b14] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Open to opportunities
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-lg text-gray-400"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl"
          >
            Gimhani
            <span className="block bg-gradient-to-r from-pink-400 via-cyan-300 to-pink-500 bg-clip-text text-transparent">
              Wickramanayaka.
            </span>
          </motion.h1>

          {/* Animated Job Titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex min-h-[40px] items-center gap-3"
          >
            <Code2 className="h-6 w-6 shrink-0 text-pink-400" />

            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-medium text-gray-300 sm:text-2xl"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          {/*<motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-400"
          >
            A motivated Junior Software Developer with a background in
            Information Technology and practical software development
            experience. Interested in building modern web applications,
            exploring new technologies, and solving real-world problems through
            code. Always eager to learn, improve technical skills, and grow as a
            developer.
          </motion.p>*/}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-pink-600 px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/25"
            >
              View My Projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/CV/GIMHANI_WICKRAMANAYAKA_CV.pdf"
              download="GIMHANI_WICKRAMANAYAKA_CV.pdf"
              className="flex items-center gap-3 rounded-xl border border-white/15 px-7 py-4 font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center gap-5"
          >
            <span className="text-sm text-gray-500">Follow me</span>
            <span className="h-px w-10 bg-gray-700" />

            <a
              href="https://github.com/Gimawickrama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/gimhani-kavindya-159314256"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-pink-400"
            >
              <FaLinkedinIn size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">

            {/* Outer glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-pink-500/20 blur-3xl" />

            {/* Animated border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/30"
            />

            {/* Profile image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-pink-400/30 bg-[#111827] shadow-2xl shadow-pink-500/20 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]">
              <Image
                src="/images/profile.jpg"
                alt="Gimhani Kavindya - Junior Software Developer"
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/90 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="rounded-xl bg-pink-500/20 p-2">
                <Sparkles className="h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Always Learning
                </p>
                <p className="text-xs text-gray-400">
                  Growing every day
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 hover:text-cyan-300 md:flex"
      >
        <span className="text-xs tracking-widest">SCROLL DOWN</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
