// File: components/games/snake/SnakeSegment.tsx

interface SnakeSegmentProps {
  isHead: boolean;
}

export default function SnakeSegment({ isHead }: SnakeSegmentProps) {
  return (
    <div className="bg-[#0a0a1a] border border-white/5 p-[2px]">
      <div
        className={`w-full h-full rounded-md border-t border-l border-white/10 ${
          isHead
            ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            : "bg-gradient-to-br from-emerald-700 to-emerald-800 shadow-[0_0_6px_rgba(16,185,129,0.5)]"
        }`}
      />
    </div>
  );
}