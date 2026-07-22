import { Game } from "@/types/game";

export const snake: Game = {
  id: "1",
  slug: "snake",
  title: "Snake",
  description:
    "Guide the snake to eat food and grow without hitting walls or itself.",
  image: "/games/snake.png",
  difficulty: "Medium",
  category: "Arcade",
  xpReward: 80,
  estimatedPlayTimeMinutes: 5,
  multiplayer: false,
  status: "available",
  maxPlayers: 1,
  featured: true,
};