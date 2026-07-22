// File: components/games/snake/GameHUD.tsx

import { Trophy, Star } from "lucide-react";

interface GameHUDProps {
  score: number;
  highScore: number;
}

export default function GameHUD({ score, highScore }: GameHUDProps) {
  return (
    <div className="w-full max-w-[600px] flex items-center justify-between gap-4 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
      {/* Title */}
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-emerald-400" />
        <h2 className="text-lg font-bold text-white tracking-wide">
          Snake Classic
        </h2>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6">
        {/* Current Score */}
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-gray-400">
            Score
          </span>
          <span className="text-xl font-bold text-emerald-400 tabular-nums">
            {score}
          </span>
        </div>

        {/* High Score */}
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span className="text-xs uppercase tracking-wider text-gray-400">
            Best
          </span>
          <span className="text-xl font-bold text-amber-400 tabular-nums">
            {highScore}
          </span>
        </div>
      </div>
    </div>
  );
}