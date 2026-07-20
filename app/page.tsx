import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 pt-24">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={20}
        />

        <h1 className="mt-8 text-4xl font-bold text-white">
          Welcome to PlayVerse
        </h1>
      </div>
    </>
  );
}