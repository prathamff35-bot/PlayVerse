// File: components/Leaderboard.tsx

"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Flame,
  Zap,
  ArrowRight,
  Swords,
} from "lucide-react";

// ----------------------------------------------------------------------
// Player Data
// ----------------------------------------------------------------------
const PLAYERS = [
  {
    rank: 1,
    username: "ShadowBlade",
    level: 48,
    xp: 92, // percentage
    wins: 342,
    streak: 18,
    initials: "SB",
    gradient: "from-yellow-500 to-amber-300",
    textGlow: "text-yellow-300",
    borderColor: "border-yellow-400/40",
  },
  {
    rank: 2,
    username: "CyberPhoenix",
    level: 45,
    xp: 87,
    wins: 298,
    streak: 12,
    initials: "CP",
    gradient: "from-gray-300 to-gray-100",
    textGlow: "text-gray-200",
    borderColor: "border-gray-300/30",
  },
  {
    rank: 3,
    username: "PixelWizard",
    level: 42,
    xp: 81,
    wins: 275,
    streak: 9,
    initials: "PW",
    gradient: "from-amber-600 to-orange-400",
    textGlow: "text-amber-300",
    borderColor: "border-amber-400/30",
  },
  {
    rank: 4,
    username: "NovaStrike",
    level: 39,
    xp: 75,
    wins: 241,
    streak: 7,
    initials: "NS",
    gradient: "from-purple-500 to-purple-300",
    textGlow: "text-purple-300",
    borderColor: "border-purple-400/20",
  },
  {
    rank: 5,
    username: "FrostByte",
    level: 37,
    xp: 70,
    wins: 218,
    streak: 5,
    initials: "FB",
    gradient: "from-cyan-500 to-cyan-300",
    textGlow: "text-cyan-300",
    borderColor: "border-cyan-400/20",
  },
  {
    rank: 6,
    username: "DarkMatter",
    level: 34,
    xp: 63,
    wins: 195,
    streak: 4,
    initials: "DM",
    gradient: "from-indigo-500 to-indigo-300",
    textGlow: "text-indigo-300",
    borderColor: "border-indigo-400/20",
  },
];

// ----------------------------------------------------------------------
// Rank Badge Component
// ----------------------------------------------------------------------
function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-300 shadow-lg shadow-yellow-500/30">
        <Trophy className="w-5 h-5 text-white" />
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-200 shadow-lg shadow-gray-400/30">
        <Medal className="w-5 h-5 text-white" />
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-400 shadow-lg shadow-amber-600/30">
        <Award className="w-5 h-5 text-white" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 font-bold text-sm">
      {rank}
    </div>
  );
}

// ----------------------------------------------------------------------
// Player Card Component
// ----------------------------------------------------------------------
function PlayerCard({
  player,
  index,
}: {
  player: (typeof PLAYERS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 80,
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl border ${player.borderColor} bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl" />

      {/* Rank */}
      <RankBadge rank={player.rank} />

      {/* Avatar (initials) */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${player.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
      >
        {player.initials}
      </div>

      {/* Info & Stats */}
      <div className="flex-1 space-y-2 w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className={`text-lg font-bold ${player.textGlow}`}>
            {player.username}
          </h3>
          <span className="text-xs text-gray-400 bg-white/5 rounded-full px-2 py-0.5">
            Lv. {player.level}
          </span>
        </div>

        {/* XP Progress Bar */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 w-8">XP</span>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${player.xp}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className={`h-full rounded-full bg-gradient-to-r ${player.gradient}`}
            />
          </div>
          <span className="text-xs text-gray-400">{player.xp}%</span>
        </div>

        {/* Wins & Streak */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Swords className="w-4 h-4" />
            <span>{player.wins} wins</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>{player.streak} streak</span>
          </div>
        </div>
      </div>

      {/* View Profile Button */}
      <motion.button
        whileHover={{ scale: 1.05, x: 3 }}
        whileTap={{ scale: 0.97 }}
        className="self-end sm:self-center flex items-center gap-1 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
      >
        View Profile
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// Leaderboard Component
// ----------------------------------------------------------------------
export default function Leaderboard() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#06050a] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-purple-300 mb-6">
            <Trophy className="w-4 h-4" />
            Leaderboard
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Hall of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Fame
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Compete with the world&apos;s best players and climb the rankings.
          </p>
        </motion.div>

        {/* Player Cards */}
        <div className="space-y-4">
          {PLAYERS.map((player, index) => (
            <PlayerCard key={player.rank} player={player} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}