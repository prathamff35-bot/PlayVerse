// File: components/games/snake/utils/collision.ts

import { Position, SnakeSegment } from "../types";

/**
 * Returns true if the given position is outside the board boundaries.
 */
export function hasWallCollision(position: Position, boardSize: number): boolean {
  return (
    position.x < 0 ||
    position.x >= boardSize ||
    position.y < 0 ||
    position.y >= boardSize
  );
}

/**
 * Returns true if newHead collides with any snake segment.
 * When willEatFood is false, the last segment (tail) will be removed,
 * so it's excluded from the collision check.
 */
export function hasSelfCollision(
  newHead: Position,
  snake: SnakeSegment[],
  willEatFood: boolean
): boolean {
  const segmentsToCheck = willEatFood ? snake : snake.slice(0, -1);
  return segmentsToCheck.some(
    (segment) => segment.x === newHead.x && segment.y === newHead.y
  );
}