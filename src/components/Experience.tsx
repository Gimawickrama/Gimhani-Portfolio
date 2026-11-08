
"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Trainee Developer",
    company: "Manodhaaraa (Pvt) Ltd",
    period: "November 2024 – April 2025",
    type: "Industrial Training",
    icon: BriefcaseBusiness,
    description:
      "Successfully completed a six-month industrial training program in the Software / Audio Visual Engineering Team as part of the Higher National Diploma in Information Technology (HNDIT) at Advanced Technological Institute, Gampaha.",
    responsibilities: [
      "Developed frontend and backend software components.",
      "Developed and deployed WordPress-based CMS websites.",
      "Collaborated with cross-functional teams on technical specifications and project timelines.",
      "Troubleshot and resolved technical issues to ensure smooth project execution.",
      "Created audio-visual materials for ongoing projects.",
      "Gained practical exposure to .NET-based ERP system development.",
      "Worked on basic CI/CD configurations for an Observability Platform.",
    ],
  },
  
{
  role: "Freelance Software Developer",
  company: "Personal Projects & Technical Learning",
  period: "October 2025 – Present",
  type: "Independent Development",
  icon: Code2,
  description:
    "Focused on independent software development projects, exploring emerging technologies, and continuously improving technical skills through hands-on learning and practical implementation.",
  responsibilities: [
    "Developed and maintained websites and independent software applications, including a client website for Fresco Travels.",
    "Integrated Supabase for backend services and database management, including review submission and moderation functionality.",
    "Worked on frontend development, responsive UI design, and website functionality.",
    "Learning and implementing modern frontend and backend technologies.",
    "Explored Artificial Intelligence and Machine Learning concepts through practical projects and API integrations.",
    "Improving software development, problem-solving, and technical skills through continuous learning.",
  ],
},

];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#070b14] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            My professional experience and journey in software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-400 via-pink-500 to-transparent md:left-8" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.role}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-[#10243d] text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] md:left-3 md:h-12 md:w-12">
                    <Icon size={22} />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-white/10 bg-[#111a2e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(6,182,212,0.08)] md:p-8">

                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                        {experience.type}
                      </span>

                      <span className="text-sm text-gray-400">
                        {experience.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 font-medium text-cyan-400">
                      {experience.company}
                    </p>

                    <p className="mt-4 leading-7 text-gray-400">
                      {experience.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="mb-3 text-sm font-semibold text-white">
                        Key Responsibilities
                      </h4>

                      <ul className="space-y-3">
                        {experience.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
