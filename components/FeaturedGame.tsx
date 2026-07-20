// File: components/FeaturedGames.tsx

"use client";

import { motion, type Variants } from "framer-motion";
import {
  Crown,
  Grid3X3,
  Gamepad2,
  Dice5,
  Hash,
  BrainCircuit,
  Users,
  BarChart3,
  Play,
  Sparkles,
  Star,
} from "lucide-react";

// ----------------------------------------------------------------------
// Game Data
// ----------------------------------------------------------------------
const FEATURED_GAMES = [
  {
    id: 1,
    title: "Chess",
    icon: Crown,
    category: "Strategy",
    rating: 4.9,
    players: "12.5K",
    difficulty: "Hard",
    gradient: "from-purple-600/20 to-purple-400/10",
    glowColor: "shadow-purple-500/20",
    borderGlow: "hover:border-purple-400/30",
  },
  {
    id: 2,
    title: "Sudoku",
    icon: Grid3X3,
    category: "Puzzle",
    rating: 4.7,
    players: "8.2K",
    difficulty: "Medium",
    gradient: "from-cyan-600/20 to-cyan-400/10",
    glowColor: "shadow-cyan-500/20",
    borderGlow: "hover:border-cyan-400/30",
  },
  {
    id: 3,
    title: "Snake",
   icon: Gamepad2,
    category: "Arcade",
    rating: 4.8,
    players: "15.3K",
    difficulty: "Easy",
    gradient: "from-emerald-600/20 to-green-400/10",
    glowColor: "shadow-emerald-500/20",
    borderGlow: "hover:border-emerald-400/30",
  },
  {
    id: 4,
    title: "2048",
    icon: Dice5,
    category: "Puzzle",
    rating: 4.6,
    players: "10.1K",
    difficulty: "Medium",
    gradient: "from-orange-600/20 to-amber-400/10",
    glowColor: "shadow-orange-500/20",
    borderGlow: "hover:border-orange-400/30",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    icon: Hash,
    category: "Classic",
    rating: 4.5,
    players: "6.8K",
    difficulty: "Easy",
    gradient: "from-pink-600/20 to-rose-400/10",
    glowColor: "shadow-pink-500/20",
    borderGlow: "hover:border-pink-400/30",
  },
  {
    id: 6,
    title: "Memory Match",
    icon: BrainCircuit,
    category: "Memory",
    rating: 4.7,
    players: "9.4K",
    difficulty: "Medium",
    gradient: "from-indigo-600/20 to-blue-400/10",
    glowColor: "shadow-indigo-500/20",
    borderGlow: "hover:border-indigo-400/30",
  },
];

// ----------------------------------------------------------------------
// Container Variants for Stagger
// ----------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
// Game Card Component
// ----------------------------------------------------------------------
function GameCard({
  game,
}: {
  game: (typeof FEATURED_GAMES)[number];
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-5 cursor-pointer transition-colors duration-300 ${game.borderGlow}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${game.gradient} blur-xl`} />
      </div>

      {/* Card content (relative to ensure it stays above glow) */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${game.gradient} border border-white/10`}>
            <game.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
              {game.title}
            </h3>
            <span className="text-sm text-gray-400">{game.category}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">{game.rating}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{game.players}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4" />
          <span>{game.difficulty}</span>
        </div>
      </div>

      {/* Play Button */}
      <div className="relative z-10 mt-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/30`}
        >
          <Play className="w-4 h-4 fill-current" />
          Play Now
        </motion.button>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// FeaturedGames Component
// ----------------------------------------------------------------------
export default function FeaturedGames() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#06050a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px]" />
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
            Featured Games
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Next Adventure
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our most popular games and compete with players worldwide.
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}