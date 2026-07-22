// File: components/games/snake/GameOverOverlay.tsx

interface GameOverOverlayProps {
  isOpen: boolean;
  title: string;
  message: string;
  onRestart: () => void;
}

export default function GameOverOverlay({
  isOpen,
  title,
  message,
  onRestart,
}: GameOverOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xs mx-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-purple-900/20 p-6 text-center">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-base text-gray-300">{message}</p>
        <button
          onClick={onRestart}
          className="mt-6 w-full rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}