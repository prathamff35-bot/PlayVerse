"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


export default function DashboardPage() {

    const router = useRouter();
    const [email, setEmail] = useState("");

    useEffect(() => {
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
  router.push("/login");
} else {
  setEmail(user.email ?? "");
}
  };

  checkUser();
}, [router]);

const handleLogout = async () => {
  await supabase.auth.signOut();
  router.push("/login");
};
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
    <h1 className="text-4xl font-bold mb-4">
      Welcome to PlayVerse Dashboard 🎮
    </h1>

    <p className="text-lg">
      Logged in as:
    </p>

    <p className="text-blue-400 font-semibold">
      {email}
    </p>
    <button
  onClick={handleLogout}
  className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
>
  Logout
</button>
  </div>
);
}