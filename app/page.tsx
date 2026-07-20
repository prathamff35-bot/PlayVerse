import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGame";
import Leaderboard from "@/components/Leaderboard";
import WhyPlayVerse from "@/components/WhyPlayVerse";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function Home() {
  console.log(supabase);
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedGames />
      <Leaderboard />
      <WhyPlayVerse />
      <CTA />
      <Footer />
    </>
  );
}