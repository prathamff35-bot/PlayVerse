import { Game } from "@/types/game";
import { snake } from "./snake";
import { ticTacToe } from "./ticTacToe";
import { connectFour } from "./connectFour";
import { chess } from "./chess";
import { sudoku } from "./sudoku";
import { memoryMatch } from "./memoryMatch";

export { snake } from "./snake";
export { ticTacToe } from "./ticTacToe";
export { connectFour } from "./connectFour";
export { chess } from "./chess";
export { sudoku } from "./sudoku";
export { memoryMatch } from "./memoryMatch";

export const games: Game[] = [
  snake,
  ticTacToe,
  connectFour,
  chess,
  sudoku,
  memoryMatch,
];