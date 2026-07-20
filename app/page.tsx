import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGame";
import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedGames />
      <Leaderboard />
    </>
  );
}