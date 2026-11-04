
"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowDown, ArrowRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "FRESCO TRAVELS Website",
    category: "CLIENT PROJECT",
    description:
      "A responsive travel website developed for a real client to showcase travel services, destinations, and business information. Includes a customer review feature with Supabase integration.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
    image: "/images/projects/fresco.jpg",
    device: "laptop",
    website: "https://www.frescotravels.lk/",
  },
  {
    number: "02",
    title: "Fidenz Weather - Comfort Index Dashboard",
    category: "TECHNICAL ASSESSMENT",
    description:
      "A full-stack weather dashboard that retrieves current weather data for 10 fixed cities, calculates a custom Comfort Index, ranks cities, and displays results in an authenticated React dashboard.",
    technologies: ["React", "OpenWeatherMap API", "REST API"],
    image: "/images/projects/fidez.jpg",
    device: "laptop",
    github: "https://github.com/Gimawickrama/fidenz_Weather",
  },
  {
    number: "03",
    title: "Workout & AI Chatbot System",
    category: "ACADEMIC PROJECT",
    description:
      "A fitness management application with an integrated predefined chatbot for workout guidance and user support. Developed using ASP.NET Core Web API with database integration.",
    technologies: [".NET", "ASP.NET Core Web API", "MSSQL", "Entity Framework"],
    image: "/images/projects/fitness.jpg",
    device: "laptop",
    github: "https://github.com/Gimawickrama/Homegains",
  },
  {
    number: "04",
    title: "Kubernetes Monitoring System",
    category: "INTERNSHIP PROJECT",
    description:
      "A Kubernetes observability solution designed to monitor cluster metrics, events, and distributed tracing through a centralized dashboard.",
    technologies: ["C#", "Prometheus", "OpenTelemetry", "Helm"],
    image: "/images/projects/monitering.jpg",
    device: "laptop",
  },
  {
    number: "05",
    title: "Dhamma Library System",
    category: "INTERNSHIP PROJECT",
    description:
      "A role-based web application for managing and streaming Dhamma content with secure access control, multiple user roles, and administrative functionality.",
    technologies: ["Django", "PostgreSQL", "Docker"],
    image: "/images/projects/libry.jpg",
    device: "tablet",
  },
  {
    number: "06",
    title: "Healthcare Management Application",
    category: "PERSONAL PROJECT",
    description:
      "A Flutter mobile application for uploading prescriptions and checking pharmacy availability. Pharmacists can review requests and respond to users.",
    technologies: ["Flutter", "Firebase"],
    image: "/images/projects/curemate.jpg",
    device: "phone",
    github: "https://github.com/Gimawickrama/CURE_MATE-APPLICATION-",
  },
];

function ProjectMockup({
  project,
}: {
  project: (typeof projects)[number];
}) {
  if (project.device === "phone") {
    return (
      <div className="mx-auto w-[210px] rounded-[2.5rem] border-[7px] border-[#303b50] bg-[#050912] p-2 shadow-[0_0_60px_rgba(236,72,153,0.18)] sm:w-[250px]">
        <div className="relative aspect-[9/18] overflow-hidden rounded-[1.8rem] bg-[#111827]">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="250px"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  if (project.device === "tablet") {
    return (
      <div className="mx-auto w-full max-w-[570px] rounded-[1.5rem] border-[9px] border-[#303b50] bg-[#050912] p-2 shadow-[0_0_60px_rgba(34,211,238,0.14)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#111827]">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 85vw, 570px"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Laptop Screen */}
      <div className="rounded-t-xl border-[7px] border-b-0 border-[#344155] bg-[#050912] p-2 shadow-[0_0_60px_rgba(236,72,153,0.15)] sm:rounded-t-2xl sm:border-[10px] sm:border-b-0 sm:p-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#111827]">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 90vw, 650px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-[#8793a5] to-[#374151] shadow-lg sm:h-4">
        <div className="mx-auto h-1 w-1/4 rounded-b-lg bg-[#263244]" />
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", "-500vw"]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0a1020]"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Sticky Showcase */}
      <div className="sticky top-0 h-screen overflow-hidden text-white">

        {/* Heading */}
        <div className="absolute left-0 right-0 top-7 z-20 px-6 text-center md:top-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            My Recent Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="text-pink-400">Projects</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
        </div>

        {/* Horizontal Track */}
        <motion.div
          style={{ x }}
          className="flex h-full w-[600vw]"
        >
          {projects.map((project, index) => (
            <div
              key={project.number}
              className="flex h-full w-screen shrink-0 items-center px-6 pb-10 pt-28 md:px-14 lg:px-20"
            >
              <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">

                {/* Project Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-2 lg:order-1"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-4xl font-bold text-pink-400/50 sm:text-5xl">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[10px] font-semibold tracking-wider text-cyan-300 sm:text-xs">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Technologies Used
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-pink-400/30 bg-pink-400/10 px-4 py-3 text-sm font-medium text-pink-300 transition hover:border-pink-400 hover:bg-pink-400/20 hover:text-white"
                      >
                        <FaGithub className="text-lg" />
                        View on GitHub
                      </a>
                    )}

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-white"
                      >
                        <ExternalLink size={17} />
                        Visit Website
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Project Screenshot Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="order-1 flex items-center justify-center lg:order-2"
                >
                  <div className="relative w-full max-w-[650px]">
                    <div className="absolute -inset-8 rounded-full bg-pink-500/10 blur-3xl" />
                    <div className="relative">
                      <ProjectMockup project={project} />
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center gap-4 md:left-14 md:right-14">
          <span className="text-xs font-semibold text-pink-300">
            SCROLL TO EXPLORE
          </span>

          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
            />
          </div>

          <span className="flex items-center gap-2 text-xs text-gray-400">
            {projects.length} PROJECTS
            <ArrowRight size={15} className="text-cyan-400" />
          </span>
        </div>
      </div>
    </section>
  );
}
