
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowUp,
  Code2,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-pink-500/20 bg-[#070b14] px-6 pb-6 pt-16 text-white md:px-12 lg:px-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Footer Content */}
        <div className="grid gap-12 pb-12 md:grid-cols-3">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold"
            >
              <Code2 className="h-7 w-7 text-pink-500" />
              Gimhani<span className="text-cyan-400">Kavindya</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Junior Software Developer passionate about building
              practical solutions, exploring new technologies,
              and continuously improving my skills.
            </p>

            <p className="mt-4 text-sm font-medium text-cyan-400">
              Always Learning. Always Building.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-pink-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-5 text-lg font-semibold">
              Let&apos;s Connect
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Interested in working together or have an opportunity?
              Feel free to get in touch.
            </p>

            <a
              href="mailto:wickramanayakagimhani@gmail.com"
              className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-cyan-400"
            >
              <Mail className="h-5 w-5 text-cyan-400" />
              wickramanayakagimhani@gmail.com
            </a>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/Gimawickrama"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-pink-400/20 bg-[#111a2e] p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/gimhani-kavindya-159314256"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-cyan-400/20 bg-[#111a2e] p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="mailto:wickramanayakagimhani@gmail.com"
                aria-label="Email"
                className="rounded-full border border-pink-400/20 bg-[#111a2e] p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-400"
              >
                <Mail size={19} />
              </a>

            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row">

          <p className="text-xs text-gray-500">
            © 2026 Gimhani Kavindya. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-500">
            Designed & Developed with{" "}
            <span className="text-pink-500">♥</span>{" "}
            by Gimhani
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group rounded-full border border-cyan-400/30 bg-[#111a2e] p-3 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-400"
          >
            <ArrowUp
              size={20}
              className="transition-transform group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>
    </footer>
  );
}
