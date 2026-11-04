
"use client";

import { motion } from "framer-motion";

import {
  SiPython,
  SiDotnet,
  SiFlask,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiWordpress,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiKubernetes,
  SiDocker,
  SiHelm,
  SiPrometheus,
  SiOpentelemetry,
  SiFlutter,
  SiGit,
  SiGithub,
  SiPostman,
  SiAndroidstudio,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import {
  FaCode,
  FaJava,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaCodeBranch,
  FaPalette,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming & Backend",
    //number: "01",
    skills: [
      { name: "C#", icon: FaCode },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: ".NET Core", icon: SiDotnet },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    title: "Frontend Development",
    //number: "02",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "WordPress", icon: SiWordpress },
    ],
  },
  {
    title: "Database",
    //number: "03",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MSSQL", icon: FaDatabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "DevOps & Cloud",
    //number: "04",
    skills: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: SiDocker },
      { name: "Helm", icon: SiHelm },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "OpenTelemetry", icon: SiOpentelemetry },
      { name: "CI/CD (Basic)", icon: FaCodeBranch },
    ],
  },
  {
    title: "Mobile Development",
    //number: "05",
    skills: [{ name: "Flutter", icon: SiFlutter }],
  },
  {
    title: "Tools & Development",
    //number: "06",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscCode },
      { name: "Visual Studio", icon: VscCode },
      { name: "Android Studio", icon: SiAndroidstudio },
    ],
  },
  {
    title: "API & Architecture",
    //number: "07",
    skills: [
      { name: "REST API", icon: FaServer },
      { name: "Backend Integration", icon: FaCodeBranch },
    ],
  },
  {
    title: "Design Tools",
    //number: "08",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: FaPalette },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#070b14] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-400/5 px-5 py-2"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-pink-400"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
              My Technical Skills
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 85 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 h-1 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
          />

          <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            Technologies and tools I have learned and worked with through
            academic projects, practical experience, and self-learning.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#101827]/80 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:border-pink-400/40 hover:shadow-xl hover:shadow-pink-500/10 sm:p-7"
            >
              {/* Top Gradient Line */}
              <div className="absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Card Heading */}
              <div className="mb-7 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-100 transition-colors duration-300 group-hover:text-pink-300">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-3 gap-3">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.07,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                      className="group/skill relative flex min-h-[105px] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/[0.06] bg-[#070b14]/80 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      {/* Hover Glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover/skill:from-pink-500/[0.08] group-hover/skill:to-cyan-500/[0.08] group-hover/skill:opacity-100" />

                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.18,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10"
                      >
                        <Icon
                          size={30}
                          className="text-gray-300 transition-colors duration-300 group-hover/skill:text-cyan-300"
                        />
                      </motion.div>

                      <span className="relative z-10 text-[11px] font-medium leading-4 text-gray-400 transition-colors duration-300 group-hover/skill:text-white sm:text-xs">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Glow */}
              <div className="pointer-events-none absolute -bottom-16 left-1/2 h-24 w-2/3 -translate-x-1/2 rounded-full bg-pink-500/0 blur-3xl transition-all duration-500 group-hover:bg-pink-500/10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-gray-300 sm:text-xl">
            Always Learning.{" "}
            <span className="text-pink-400">Always Building.</span>{" "}
            <span className="text-cyan-400">Always Improving.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
