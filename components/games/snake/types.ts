// File: components/games/snake/types.ts

export type Direction = "up" | "down" | "left" | "right";

export interface Position {
  x: number;
  y: number;
}

export type SnakeSegment = Position;