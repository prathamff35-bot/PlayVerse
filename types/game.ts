// File: types/game.ts

/**
 * Difficulty levels for games.
 */
export type Difficulty = "Easy" | "Medium" | "Hard" | "Expert";

/**
 * Game categories available on the platform.
 */
export type Category =
  | "Strategy"
  | "Puzzle"
  | "Arcade"
  | "Memory"
  | "Classic"
  | "Action"
  | "Sports"
  | "Racing"
  | "Adventure";

/**
 * Core Game interface used throughout the application.
 * Designed to be database-agnostic and scalable.
 */
export interface Game {
  /** Unique identifier (UUID or auto‑incremented) */
  id: string;

  /** URL‑safe unique slug (e.g., "memory-match") */
  slug: string;

  /** Display title */
  title: string;

  /** Short description */
  description: string;

  /** Thumbnail image URL */
  image: string;

  /** Game difficulty */
  difficulty: Difficulty;

  /** Primary category */
  category: Category;

  /** XP awarded upon completion */
  xpReward: number;

  /** Estimated play time in minutes */
  estimatedPlayTimeMinutes: number;

  /** Whether the game supports multiplayer */
  multiplayer: boolean;
  maxPlayers: number;

  /** Indicates the game is not yet released */
  comingSoon: boolean;

  /** Whether the game is featured on the homepage */
  featured: boolean;
}