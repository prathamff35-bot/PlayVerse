type XPProgressProps = {
  xp: number;
  maxXp: number;
};

export default function XPProgress({
  xp,
  maxXp,
}: XPProgressProps) {
  const percentage = (xp / maxXp) * 100;

  return (
    <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          XP Progress
        </h2>

        <span className="text-gray-400">
          {xp} / {maxXp}
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-800">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}