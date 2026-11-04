
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // EmailJS Configuration
  const SERVICE_ID = "service_1ayy8b5";
  const TEMPLATE_ID = "template_seppj6b";
  const PUBLIC_KEY = "BYZznTN1T_rALeyL1";

  // WhatsApp Number
  const whatsappNumber = "94778217949";

  const whatsappMessage = encodeURIComponent(
    "Hi, I found your portfolio and would like to get in touch.",
  );

  // Send Email
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY,
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("Email sending failed:", error);

      if (error instanceof Error) {
        console.error("Error message:", error.message);
      } else {
        console.error("Error details:", JSON.stringify(error));
      }

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#070b14] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let&apos;s Work <span className="text-cyan-400">Together</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            I&apos;m open to new opportunities, collaborations, and interesting
            software development projects. Feel free to get in touch.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-3 text-2xl font-bold">Let&apos;s Connect</h3>

              <p className="leading-7 text-gray-400">
                Have a project in mind or looking for a junior software
                developer? I&apos;d love to hear from you.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:wickramanayakagimhani@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111a2e] p-5 transition-all hover:border-cyan-400/50"
            >
              <div className="rounded-xl bg-cyan-400/10 p-3">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Email Me</p>
                <p className="break-all font-medium text-white">
                  wickramanayakagimhani@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111a2e] p-5">
              <div className="rounded-xl bg-cyan-400/10 p-3">
                <MapPin className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium text-white">
                  Minuwangoda, Sri Lanka
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* GitHub */}
              <a
                href="https://github.com/Gimawickrama"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-[#111a2e] p-4 text-gray-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gimhani-kavindya-159314256"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-[#111a2e] p-4 text-gray-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedinIn size={22} />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-xl border border-green-400/20 bg-[#111a2e] p-4 text-green-400 transition-all hover:border-green-400 hover:bg-green-400/10"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-pink-400/15 bg-[#111a2e] p-7 sm:p-9"
          >
            <h3 className="mb-2 text-2xl font-bold">Send Me a Message</h3>

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm text-gray-300"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p
                role="status"
                className="rounded-xl border border-green-400/20 bg-green-400/10 p-3 text-sm text-green-400"
              >
                Message sent successfully! Thank you for contacting me.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-400"
              >
                Failed to send message. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-500">
              Your message will be sent directly to my email.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
