// File: components/games/snake/SnakeBoard.tsx
"use client";

import useSnakeGame from "./hooks/useSnakeGame";
import { BOARD_SIZE } from "./constants";
import BoardCell from "./BoardCell";
import GameOverOverlay from "./GameOverOverlay";

export default function SnakeBoard() {
  const { snake, isGameOver, food, restartGame } = useSnakeGame();

  const head = snake[0]; // first segment is the head

  const gridCells = [];
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
     const snakeSet = new Set(
  snake.map(({ x, y }) => `${x},${y}`)
);
      const isFood = food.x === x && food.y === y;
      const isHead = head.x === x && head.y === y;

      const type = snakeSet.has(`${x},${y}`) ? "snake" : isFood ? "food" : "empty";

      gridCells.push(
        <BoardCell
          key={`${x}-${y}`}
          type={type}
          isHead={isHead}
        />
      );
    }
  }

  return (
    <div className="relative w-full max-w-[600px] aspect-square rounded-3xl border border-white/10 backdrop-blur-xl bg-black/40 shadow-2xl shadow-purple-900/20 overflow-hidden p-4">
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.12), transparent 70%)",
        }}
      />
      <div
        className="grid h-full w-full rounded-2xl overflow-hidden"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
        }}
      >
        {gridCells}
      </div>

      {/* Game Over Overlay */}
      <GameOverOverlay
        isOpen={isGameOver}
        title="Game Over"
        message="You hit the wall!"
        onRestart={restartGame}
      />
    </div>
  );
}