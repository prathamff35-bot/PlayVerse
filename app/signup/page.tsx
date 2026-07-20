"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import PrimaryButton from "@/components/PrimaryButton";

export default function SignupPage() {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignUp = async () => {
  const result = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(result);

  if (result.error) {
    alert(result.error.message);
  } else {
    alert("Account created! Check your email to verify your account.");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none"
/>

       <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="mb-6 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none"
/>

       <PrimaryButton onClick={handleSignUp}>
  Sign Up
</PrimaryButton>
      </div>
    </div>
  );
}