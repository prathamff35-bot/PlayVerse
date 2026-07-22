// File: components/games/snake/DifficultySelector.tsx

export type Difficulty = "easy" | "medium" | "hard";

interface DifficultySelectorProps {
  value: Difficulty;
  onChange: (difficulty: Difficulty) => void;
}

export default function DifficultySelector({ value, onChange }: DifficultySelectorProps) {
  const options: { label: string; value: Difficulty }[] = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  return (
    <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1 gap-1">
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}