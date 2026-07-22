// File: components/games/snake/utils/food.ts

import { Position, SnakeSegment } from "../types";

export function generateFoodPosition(
  snake: SnakeSegment[],
  boardSize: number
): Position {
  const occupied = new Set(snake.map((seg) => `${seg.x},${seg.y}`));
  let x: number, y: number;

  do {
    x = Math.floor(Math.random() * boardSize);
    y = Math.floor(Math.random() * boardSize);
  } while (occupied.has(`${x},${y}`));

  return { x, y };
}