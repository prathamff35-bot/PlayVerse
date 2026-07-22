import { Game } from "@/types/game";

export const chess: Game = {
  id: "4",
  slug: "chess",
  title: "Chess",
  description:
    "The ultimate strategy game – outsmart your opponent and capture the king.",
  image: "/games/chess.png",
  difficulty: "Hard",
  category: "Strategy",
  xpReward: 200,
  estimatedPlayTimeMinutes: 30,
  multiplayer: true,
  status: "available",
  maxPlayers: 2,
  featured: true,
};