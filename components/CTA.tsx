// File: components/CTA.tsx

"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight, UserPlus, LogIn } from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// CTA Component
// ----------------------------------------------------------------------
export default function CTA() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-[#06050a]">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large central glow */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
        />
        {/* Secondary cyan glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-purple-300 mb-8"
        >
          <Rocket className="w-4 h-4" />
          Join PlayVerse
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
        >
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Journey?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Create your account, unlock achievements, track your progress, and
          compete with players around the world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.div
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
>
  <Link
    href="/signup"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-shadow"
  >
    <UserPlus className="w-5 h-5" />
    Create Account
  </Link>
</motion.div>

          {/* Secondary CTA */}
          <motion.div
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
>
  <Link
    href="/login"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors"
  >
    <LogIn className="w-5 h-5" />
    Sign In
  </Link>
</motion.div>
</motion.div>
        {/* Bottom floating element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <ArrowRight className="w-4 h-4" />
            <span>Create your account and begin your journey to the top of the leaderboard.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}