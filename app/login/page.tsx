"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import AuthInput from "@/components/AuthInput";

export default function LoginPage() {

    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();

const handleLogin = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
  alert(error.message);
} else {
  router.push("/dashboard");
}
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Login
        </h1>

       <AuthInput
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<AuthInput
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

      <PrimaryButton onClick={handleLogin}>
  Login
</PrimaryButton>
      </div>
    </div>
  );
}