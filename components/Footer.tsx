// File: components/Footer.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Heart,
 GitBranch,
  Camera,
  Globe,
  MessageCircle,
} from "lucide-react";

// ----------------------------------------------------------------------
// Footer Component
// ----------------------------------------------------------------------
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="relative bg-[#06050a] border-t border-white/5 backdrop-blur-xl overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Left: Brand & Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Gamepad2 className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-purple-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                PlayVerse
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The next generation gaming platform where players compete, level
              up, and become legends.
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Games", "Leaderboard", "About"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-300 transition-colors text-sm relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Community */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Community
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: MessageCircle,
                  label: "Discord",
                  href: "#",
                },
                {
                  icon: GitBranch,
                  label: "GitHub",
                  href: "#",
                },
                {
                  icon: Camera,
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: Globe,
                  label: "X (Twitter)",
                  href: "#",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Divider & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} PlayVerse. Built with{" "}
            <Heart className="w-4 h-4 fill-purple-400 text-purple-400 animate-pulse" />{" "}
            using Next.js & Tailwind CSS.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}