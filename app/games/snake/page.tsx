// File: app/games/snake/page.tsx

import Link from "next/link";
import SnakeBoard from "@/components/games/snake/SnakeBoard";

export default function SnakePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#06050a] px-4">
      <h1 className="text-5xl font-extrabold text-white">Snake</h1>
      <div className="mt-8 w-full flex justify-center">
        <SnakeBoard />
      </div>
      <Link
        href="/games"
        className="mt-8 inline-block rounded-xl bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition-colors"
      >
        Back to Games
      </Link>
    </main>
  );
}