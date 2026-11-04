
"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* ===================================== */}
      {/* BACKGROUND IMAGE */}
      {/* Change background image path here */}
      {/* ===================================== */}

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Developer.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#070b14]/80" />

      {/* Pink & Cyan Gradient Shade */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
        </motion.div>

        {/* About Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">

          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-base leading-8 text-gray-300"
          >
            <p>
              I am a Junior Software Developer with a Higher National
              Diploma in Information Technology (HNDIT) from SLIATE.
            </p>

            <p>
              I have practical experience in software development through
              my internship, where I worked with technologies such as C#,
              .NET, Django, and databases.
            </p>

            <p>
              I enjoy developing web applications, learning new
              technologies, and solving problems through programming.
              I am continuously improving my technical skills and looking
              for opportunities to grow as a software developer.
            </p>
          </motion.div>

          {/* About Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {/* Education */}
            <div className="rounded-2xl border border-pink-400/20 bg-[#111a2e]/85 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.08)]">
              <GraduationCap className="mb-5 h-9 w-9 text-cyan-400" />

              <h3 className="mb-2 text-lg font-semibold">
                Education
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                Higher National Diploma in Information Technology (HNDIT)
                <br />
                SLIATE
              </p>
            </div>

            {/* Development */}
            <div className="rounded-2xl border border-pink-400/20 bg-[#111a2e]/85 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.08)]">
              <Code2 className="mb-5 h-9 w-9 text-cyan-400" />

              <h3 className="mb-2 text-lg font-semibold">
                Development
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                Web development, backend development, and database integration.
              </p>
            </div>

            {/* Mindset */}
            <div className="rounded-2xl border border-pink-400/20 bg-[#111a2e]/85 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.08)] sm:col-span-2">
              <Lightbulb className="mb-5 h-9 w-9 text-cyan-400" />

              <h3 className="mb-2 text-lg font-semibold">
                My Mindset
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                Always curious, eager to learn, and passionate about
                building useful software solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Developer Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-lg font-medium leading-8 text-gray-300 sm:text-xl">
            Turning ideas into{" "}
            <span className="font-semibold text-cyan-400">
              practical solutions
            </span>{" "}
            through code.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
