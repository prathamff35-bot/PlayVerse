import { Game } from "@/types/game";

export const sudoku: Game = {
  id: "5",
  slug: "sudoku",
  title: "Sudoku",
  description:
    "Fill the grid so every row, column, and box contains digits 1‑9 exactly once.",
  image: "/games/sudoku.png",
  difficulty: "Hard",
  category: "Puzzle",
  xpReward: 120,
  estimatedPlayTimeMinutes: 15,
  multiplayer: false,
  status: "available",
  maxPlayers: 1,
  featured: false,
};