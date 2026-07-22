// File: components/games/snake/PauseButton.tsx

"use client";

import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

interface PauseButtonProps {
  isPaused: boolean;
  onClick: () => void;
}

export default function PauseButton({ isPaused, onClick }: PauseButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={isPaused ? "Resume game" : "Pause game"}
      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-2 text-white hover:bg-white/10 transition-colors"
    >
      {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
    </motion.button>
  );
}