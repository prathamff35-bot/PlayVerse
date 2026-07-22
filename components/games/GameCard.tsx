// File: components/games/GameCard.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, Zap } from "lucide-react";
import type { Game } from "@/types/game";

// ----------------------------------------------------------------------
// Props Interface
// ----------------------------------------------------------------------
interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

// ----------------------------------------------------------------------
// GameCard Component
// ----------------------------------------------------------------------
export default function GameCard({ game, onPlay }: GameCardProps) {
  const isComingSoon = game.status === "coming-soon";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Difficulty badge */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-xs text-white font-medium px-2.5 py-1 rounded-full border border-white/10">
          {game.difficulty}
        </span>
        {isComingSoon && (
          <span className="absolute top-3 right-3 bg-purple-600/80 backdrop-blur-md text-xs text-white font-semibold px-2.5 py-1 rounded-full border border-purple-400/30">
            Coming Soon
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
          {game.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">{game.description}</p>

        {/* XP and Difficulty */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="flex items-center gap-1 text-cyan-400">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">{game.xpReward} XP</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{game.difficulty}</span>
          </div>
        </div>

        {/* Play / Coming Soon Button */}
        {isComingSoon ? (
          <button
            disabled
            className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-white/10 text-gray-400 font-medium text-sm border border-white/10 cursor-not-allowed opacity-60"
          >
            Coming Soon
          </button>
        ) : (
          <motion.button
            onClick={() => onPlay(game)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-shadow"
          >
            <Play className="w-4 h-4 fill-current" />
            Play Now
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}