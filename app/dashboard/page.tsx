"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import StatCard from "@/components/dashboard/StatCard";
import ContinuePlaying from "@/components/dashboard/ContinuePlaying";
import XPProgress from "@/components/dashboard/XPProgress";

export default function DashboardPage() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [level, setLevel] = useState(1);
const [xp, setXp] = useState(0);
const [coins, setCoins] = useState(250);
const [wins, setWins] = useState(0);

    useEffect(() => {
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
  router.push("/login");
} else {
  setEmail(user.email ?? "");

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!error && profile) {
    setLevel(profile.level);
    setXp(profile.xp);
    setCoins(profile.coins);
    setWins(profile.wins);
  }
}
  };

  checkUser();
}, [router]);

const handleLogout = async () => {
  await supabase.auth.signOut();
  router.push("/login");
};
  return (
  <div className="flex min-h-screen bg-black text-white">
    <Sidebar />

    <main className="flex-1">
      <TopBar email={email} />

      <div className="p-8">
        <p className="text-gray-400">Logged in as</p>

        <p className="mb-8 text-lg font-semibold text-blue-400">
          {email}
        </p>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Level" value={level.toString()} />
          <StatCard title="XP" value={`${xp} / 100`} />
          <StatCard title="Coins" value={coins.toString()} />
          <StatCard title="Wins" value={wins.toString()} />
        </div>

        <XPProgress xp={xp} maxXp={100} />

        <ContinuePlaying />

        <button
          onClick={handleLogout}
          className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </main>
  </div>
);
}