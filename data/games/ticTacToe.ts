import { Game } from "@/types/game";

export const ticTacToe: Game = {
  id: "2",
  slug: "tic-tac-toe",
  title: "Tic Tac Toe",
  description:
    "Classic game of Xs and Os – be the first to line up three in a row.",
  image: "/games/tic-tac-toe.png",
  difficulty: "Easy",
  category: "Classic",
  xpReward: 50,
  estimatedPlayTimeMinutes: 3,
  multiplayer: true,
  status: "available",
  maxPlayers: 2,
  featured: false,
};