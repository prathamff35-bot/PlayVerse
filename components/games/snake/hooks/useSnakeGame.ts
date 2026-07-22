// File: components/games/snake/hooks/useSnakeGame.ts

import { useState, useEffect, useRef, useCallback } from "react";
import {
  INITIAL_SNAKE,
  INITIAL_DIRECTION,
  BOARD_SIZE,
} from "../constants";
import { getNextHeadPosition } from "../utils/movement";
import { generateFoodPosition } from "../utils/food";
import { hasWallCollision, hasSelfCollision } from "../utils/collision";
import { SnakeSegment, Direction, Position } from "../types";
import { Difficulty } from "../DifficultySelector";

// ----------------------------------------------------------------------
// Speed mapping per difficulty
// ----------------------------------------------------------------------
const GAME_SPEEDS: Record<Difficulty, number> = {
  easy: 180,
  medium: 120,
  hard: 80,
};

export default function useSnakeGame() {
  // ---- Core game state ----
  const [snake, setSnake] = useState<SnakeSegment[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [food, setFood] = useState<Position>(() =>
    generateFoodPosition(INITIAL_SNAKE, BOARD_SIZE)
  );
  const [score, setScore] = useState(0);

  // ---- High score (persisted in localStorage) ----
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    const stored = localStorage.getItem("snake-high-score");
    if (stored) {
      setHighScore(Number(stored));
    }
  }, []);

  // Sync highScore to localStorage when it increases
  useEffect(() => {
    localStorage.setItem("snake-high-score", String(highScore));
  }, [highScore]);

  // ---- Pause & Difficulty ----
  const [isPaused, setIsPaused] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  // ---- Mutable refs for the interval callback ----
  const snakeRef = useRef(snake);
  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  const foodRef = useRef(food);
  useEffect(() => {
    foodRef.current = food;
  }, [food]);

  // ---- Game loop ----
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      const currentSnake = snakeRef.current;
      const currentFood = foodRef.current;
      const head = currentSnake[0];
      const newHead = getNextHeadPosition(head, direction);

      // Wall collision
      if (hasWallCollision(newHead, BOARD_SIZE)) {
        setIsGameOver(true);
        return;
      }

      const willEatFood =
        newHead.x === currentFood.x && newHead.y === currentFood.y;

      // Self collision
      if (hasSelfCollision(newHead, currentSnake, willEatFood)) {
        setIsGameOver(true);
        return;
      }

      // Move snake
      if (willEatFood) {
        const newSnake = [newHead, ...currentSnake];
        setSnake(newSnake);
        setFood(generateFoodPosition(newSnake, BOARD_SIZE));
        setScore((prev) => {
          const next = prev + 1;
          // Update high score immediately if needed
          setHighScore((currentHigh) => {
            if (next > currentHigh) return next;
            return currentHigh;
          });
          return next;
        });
      } else {
        const newSnake = [newHead, ...currentSnake.slice(0, -1)];
        setSnake(newSnake);
      }
    }, GAME_SPEEDS[difficulty]);

    return () => clearInterval(interval);
  }, [direction, isGameOver, isPaused, difficulty]);

  // ---- Keyboard controls ----
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
      }

      setDirection((currentDirection) => {
        switch (e.key) {
          case "ArrowUp":
            return currentDirection === "down" ? currentDirection : "up";
          case "ArrowDown":
            return currentDirection === "up" ? currentDirection : "down";
          case "ArrowLeft":
            return currentDirection === "right" ? currentDirection : "left";
          case "ArrowRight":
            return currentDirection === "left" ? currentDirection : "right";
          default:
            return currentDirection;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ---- Restart ----
  const restartGame = useCallback(() => {
    // Reset refs immediately
    snakeRef.current = INITIAL_SNAKE;
    const newFood = generateFoodPosition(INITIAL_SNAKE, BOARD_SIZE);
    foodRef.current = newFood;

    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setFood(newFood);
    setScore(0);
    setIsPaused(false);
    // difficulty stays unchanged
  }, []);

  return {
    snake,
    direction,
    setDirection,
    food,
    score,
    highScore,
    isGameOver,
    isPaused,
    togglePause,
    difficulty,
    setDifficulty,
    restartGame,
  };
}