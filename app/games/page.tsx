// File: app/games/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { games } from "@/data/games";
import GameCard from "@/components/games/GameCard";
import type { Game } from "@/types/game";
import { Gamepad2, Star, Clock } from "lucide-react";


export default function GamesPage() {
  const router = useRouter();
  
  const totalGames = games.length;
  const featuredGames = games.filter((game) => game.featured).length;
  const comingSoonGames = games.filter(
  (game: Game) => game.status === "coming-soon"
).length;
  const handlePlay = (game: Game) => {
    if (game.slug === "snake") {
      router.push("/games/snake");
    } else {
      console.log("Playing game:", game.title, game);
    }
  };

  const summaryCards = [
    {
      label: "Total Games",
      value: totalGames,
      icon: Gamepad2,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      label: "Featured",
      value: featuredGames,
      icon: Star,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      label: "Coming Soon",
      value: comingSoonGames,
      icon: Clock,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  ];

  return (
    <main className="min-h-screen bg-[#06050a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white">Games</h1>
        <p className="mt-2 text-lg text-gray-400">
          Browse our collection of premium mini games.
        </p>

        {/* Summary Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
            >
              <div className={`p-3 rounded-full ${card.bg}`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-400">{card.label}</p>
                <p className="text-2xl font-bold text-white">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Games Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onPlay={handlePlay} />
          ))}
        </div>
      </div>
    </main>
  );
}