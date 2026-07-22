// File: components/games/snake/Food.tsx

export default function Food() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="w-[75%] h-[75%] rounded-full animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.7)]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 70%), linear-gradient(135deg, #ef4444, #b91c1c)",
        }}
      />
    </div>
  );
}