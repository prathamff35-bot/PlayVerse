 // File: components/Navbar.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Search,
  Bell,
  User,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Categories", href: "/categories" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "About", href: "/about" },
];

// ----------------------------------------------------------------------
// Navbar Component
// ----------------------------------------------------------------------
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ---- Scroll Effect ----
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Close mobile menu on route change ----
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // ---- Prevent body scroll when mobile menu is open ----
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ---- Desktop / Mobile Navbar ---- */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          scrolled
            ? "py-2 scale-[0.98] backdrop-blur-2xl bg-black/40 shadow-2xl shadow-purple-900/10 border-b border-white/5"
            : "py-4 scale-100 backdrop-blur-xl bg-black/20 border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ---- Left: Logo + Brand ---- */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none"
            aria-label="PlayVerse Home"
          >
            <div className="relative">
              <Gamepad2
                className="w-8 h-8 text-purple-400 transition-all duration-500 group-hover:rotate-12 group-hover:text-cyan-400"
                strokeWidth={1.8}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))",
                }}
              />
              <span className="absolute inset-0 blur-md bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
            </div>
            <span className="text-xl font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-purple-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PlayVerse
            </span>
          </Link>

          {/* ---- Center: Desktop Navigation ---- */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isActive
                        ? "text-white bg-white/5"
                        : "text-gray-300 hover:text-purple-300 hover:-translate-y-0.5 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {/* Active indicator with glow */}
                    {isActive && (
                     <motion.span
  layoutId="navIndicator"
  className="absolute left-1/2 bottom-1 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-lg shadow-purple-500/60"

                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ---- Right: Actions ---- */}
          <div className="flex items-center gap-0.7">
            {/* Search Icon */}
            <button
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Bell Notification Icon */}
            <button
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Login Button (desktop) */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Login
            </Link>

            {/* CTA: Start Playing */}
            <button
  className="hidden sm:flex ml-1 h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-105 hover:border-purple-500/40 hover:bg-white/10 hover:text-white"
  aria-label="Profile"
>
  <User className="h-5 w-5" />
</button>

            {/* Hamburger Menu (mobile) */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ---- Mobile Full-Screen Overlay ---- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ---- Mobile Slide Menu ---- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              mass: 0.8,
            }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-50 md:hidden flex flex-col p-6 bg-gray-950/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 flex-1">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-white border border-purple-400/30"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4 ml-auto text-purple-400" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom Action Buttons */}
            <div className="mt-auto space-y-3 pt-6 border-t border-white/10">
              <Link
                href="/login"
                className="block w-full text-center py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                href="/play"
                className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Start Playing
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}