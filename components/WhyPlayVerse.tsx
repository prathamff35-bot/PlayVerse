// File: components/WhyPlayVerse.tsx

"use client";

import { motion, type Variants } from "framer-motion";
import {
  Zap,
  Trophy,
  Users,
  Gift,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";

// ----------------------------------------------------------------------
// Feature Data
// ----------------------------------------------------------------------
const FEATURES = [
  {
    id: 1,
    icon: Zap,
    title: "Instant Play",
    description:
      "No downloads, no installs. Jump into any game instantly and start playing in seconds.",
    gradient: "from-purple-600/30 to-purple-400/10",
    glowColor: "shadow-purple-500/20",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Competitive Leaderboards",
    description:
      "Climb global rankings, earn badges, and prove you're the best in every game.",
    gradient: "from-cyan-600/30 to-cyan-400/10",
    glowColor: "shadow-cyan-500/20",
  },
  {
    id: 3,
    icon: Users,
    title: "Multiplayer",
    description:
      "Challenge friends or play with gamers worldwide. Real-time matches, always fun.",
    gradient: "from-emerald-600/30 to-green-400/10",
    glowColor: "shadow-emerald-500/20",
  },
  {
    id: 4,
    icon: Gift,
    title: "Daily Rewards",
    description:
      "Log in every day to claim bonuses, unlock exclusive items, and boost your progress.",
    gradient: "from-orange-600/30 to-amber-400/10",
    glowColor: "shadow-orange-500/20",
  },
  {
    id: 5,
    icon: Shield,
    title: "Secure Accounts",
    description:
      "Your data, progress, and privacy are protected with enterprise-grade security.",
    gradient: "from-indigo-600/30 to-blue-400/10",
    glowColor: "shadow-indigo-500/20",
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Play Anywhere",
    description:
      "Seamless experience across desktop, tablet, and mobile. Your games, everywhere.",
    gradient: "from-pink-600/30 to-rose-400/10",
    glowColor: "shadow-pink-500/20",
  },
];

// ----------------------------------------------------------------------
// Animation Variants
// ----------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// ----------------------------------------------------------------------
// WhyPlayVerse Component
// ----------------------------------------------------------------------
export default function WhyPlayVerse() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#06050a] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-purple-300 mb-6">
            <Sparkles className="w-4 h-4" />
            Why PlayVerse
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            More Than Just{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Games
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            PlayVerse combines competitive gaming, beautiful design, achievements,
            and a thriving community into one premium experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3 },
}}
              className={`group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 shadow-lg transition-all duration-300`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} blur-xl`}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 w-fit`}
                >
                  <feature.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}