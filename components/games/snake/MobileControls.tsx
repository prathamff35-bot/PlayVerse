"use client";

import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Direction } from "./types";

interface Props {
  onDirection: (dir: Direction | ((prev: Direction) => Direction)) => void;
}

export default function MobileControls({ onDirection }: Props) {
  const changeDirection = (dir: Direction) => {
    onDirection((current) => {
      switch (dir) {
        case "up":
          return current === "down" ? current : "up";
        case "down":
          return current === "up" ? current : "down";
        case "left":
          return current === "right" ? current : "left";
        case "right":
          return current === "left" ? current : "right";
      }
    });
  };

  const btn =
    "w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white active:scale-95 transition";

  return (
    <div className="block md:hidden mt-6 select-none">
      <div className="flex flex-col items-center gap-2">
        <button type="button" className={btn} onClick={() => changeDirection("up")}>
          <ArrowUp />
        </button>

        <div className="flex gap-2">
          <button type="button" className={btn} onClick={() => changeDirection("left")}>
            <ArrowLeft />
          </button>

          <button type="button" className={btn} onClick={() => changeDirection("down")}>
            <ArrowDown />
          </button>

          <button type="button" className={btn} onClick={() => changeDirection("right")}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}