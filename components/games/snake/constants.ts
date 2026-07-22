// File: components/games/snake/constants.ts

import { Direction, SnakeSegment } from "./types";

export const BOARD_SIZE = 20;

export const INITIAL_SNAKE: SnakeSegment[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];

export const INITIAL_DIRECTION: Direction = "right";

export const GAME_SPEED = 150;