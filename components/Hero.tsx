// File: components/Hero.tsx

"use client";

import { useEffect, useState } from "react";

import {
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Gamepad2,
  Play,
  ArrowRight,
  Users,
  Trophy,
  Zap,
  Mouse,
} from "lucide-react";

// ----------------------------------------------------------------------
// Background Elements (Animated Gradients & Grid)
// ----------------------------------------------------------------------
function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Radial glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-[150px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating blurred circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: "15%", right: "10%" }}
      />
      <motion.div
        className="absolute w-36 h-36 rounded-full bg-purple-400/10 blur-2xl"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "40%", left: "60%" }}
      />
    </div>
  );
}

// ----------------------------------------------------------------------
// Floating Game Cards (Right Side Illustration)
// ----------------------------------------------------------------------
const FLOATING_CARDS = [
  { title: "Chess", color: "from-purple-600/30 to-purple-400/20", size: "w-20 h-28", x: -20, y: -40, rotate: -8, delay: 0 },
  { title: "2048", color: "from-cyan-500/30 to-cyan-300/20", size: "w-16 h-24", x: 40, y: -10, rotate: 5, delay: 0.2 },
  { title: "Snake", color: "from-purple-500/20 to-purple-300/10", size: "w-24 h-16", x: -60, y: 30, rotate: 12, delay: 0.4 },
  { title: "Sudoku", color: "from-cyan-600/30 to-cyan-400/20", size: "w-20 h-20", x: 50, y: 50, rotate: -3, delay: 0.6 },
  { title: "Memory", color: "from-purple-400/20 to-pink-400/10", size: "w-28 h-20", x: -10, y: -80, rotate: -10, delay: 0.8 },
];

function FloatingCards({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  // Spring physics for parallax
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  return (
    <div className="relative w-full lg:w-1/2 h-[500px] lg:h-auto flex items-center justify-center">
      {/* Center glow behind cards */}
      <div className="absolute w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />

      {FLOATING_CARDS.map((card, i) => (
        <motion.div
          key={card.title}
          className={`absolute ${card.size} rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center`}
          style={{
            x: useTransform(springX, (val) => val * 0.02 + card.x),
            y: useTransform(springY, (val) => val * 0.02 + card.y),
          }}
          animate={{
            rotate: [card.rotate, card.rotate + 3, card.rotate - 2, card.rotate],
            y: [card.y, card.y - 15, card.y + 10, card.y],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: card.delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: card.delay + 0.1 },
          }}
          whileHover={{ scale: 1.08, zIndex: 10 }}
        >
          <span className="text-xs font-semibold text-white/80 tracking-wide">
            {card.title}
          </span>
        </motion.div>
      ))}

      {/* Central decorative card */}
      <motion.div
        className="w-32 h-44 rounded-3xl bg-gradient-to-br from-purple-600/40 to-cyan-500/30 backdrop-blur-lg border border-white/20 shadow-2xl flex flex-col items-center justify-center gap-2"
        style={{
          x: useTransform(springX, (val) => val * 0.04),
          y: useTransform(springY, (val) => val * 0.04),
        }}
        animate={{
          rotate: [-5, 2, -2, -5],
          y: [0, -20, 10, 0],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Gamepad2 className="w-10 h-10 text-white drop-shadow-lg" />
        <span className="text-sm font-bold text-white">PlayVerse</span>
      </motion.div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Stats Cards
// ----------------------------------------------------------------------
const STATS = [
  { icon: Gamepad2, label: "50+ Games", color: "text-purple-400" },
  { icon: Users, label: "10K+ Players", color: "text-cyan-400" },
  { icon: Trophy, label: "Global Leaderboards", color: "text-purple-300" },
  { icon: Zap, label: "Instant Play", color: "text-cyan-300" },
];

function Stats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors group"
        >
          <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
          <span className="text-sm font-medium text-gray-200">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

// ----------------------------------------------------------------------
// Scroll Indicator
// ----------------------------------------------------------------------
function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
      <Mouse className="w-6 h-6" />
      <span className="text-xs font-medium tracking-widest uppercase">Scroll to Explore</span>
    </div>
  );
}

// ----------------------------------------------------------------------
// Hero Component
// ----------------------------------------------------------------------
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1..1 range for parallax offset
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#06050a]">
      {/* Background decorations */}
      <BackgroundDecorations />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-purple-300">
            <Gamepad2 className="w-4 h-4" />
            Welcome to PLAYVERSE
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              PLAY.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              RELAX.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              REPEAT.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl">
            The ultimate destination for premium mini games.
            <br />
            Play instantly. Compete globally. Have fun.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="/play"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-shadow"
            >
              <Play className="w-5 h-5 fill-current" />
              Start Playing
            </motion.a>
            <motion.a
              href="/games"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Games
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Stats */}
          <Stats />
        </motion.div>

        {/* Right Side: Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1"
        >
          <FloatingCards mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}