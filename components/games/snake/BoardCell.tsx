// File: components/games/snake/BoardCell.tsx

import SnakeSegment from "./SnakeSegment";
import Food from "./Food";

interface BoardCellProps {
  type: "empty" | "snake" | "food";
  isHead?: boolean;
}

export default function BoardCell({ type, isHead }: BoardCellProps) {
  if (type === "snake") {
    return (
      <div className="aspect-square">
        <SnakeSegment isHead={isHead ?? false} />
      </div>
    );
  }

  if (type === "food") {
    return (
      <div className="aspect-square">
        <Food />
      </div>
    );
  }

  return (
    <div className="aspect-square bg-[#0a0a1a] border border-white/5" />
  );
}