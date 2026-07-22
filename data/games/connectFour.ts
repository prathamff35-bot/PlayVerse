import { Game } from "@/types/game";

export const connectFour: Game = {
  id: "3",
  slug: "connect-four",
  title: "Connect Four",
  description:
    "Drop discs and connect four in a row before your opponent does.",
  image: "/games/connect-four.png",
  difficulty: "Medium",
  category: "Strategy",
  xpReward: 100,
  estimatedPlayTimeMinutes: 10,
  multiplayer: true,
  status: "available",
  maxPlayers: 2,
  featured: true,
};