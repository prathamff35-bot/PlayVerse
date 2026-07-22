// File: components/games/snake/utils/movement.ts

import { SnakeSegment, Direction } from "../types";

export function getNextHeadPosition(
  head: SnakeSegment,
  direction: Direction
): SnakeSegment {
  switch (direction) {
    case "up":
      return { x: head.x, y: head.y - 1 };
    case "down":
      return { x: head.x, y: head.y + 1 };
    case "left":
      return { x: head.x - 1, y: head.y };
    case "right":
      return { x: head.x + 1, y: head.y };
    default:
      return head;
  }
}