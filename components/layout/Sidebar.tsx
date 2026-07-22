import {
  LayoutDashboard,
  Gamepad2,
  Trophy,
  Medal,
  User,
  Settings,
} from "lucide-react";


export default function Sidebar() {

    
  return (
    <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">🎮 PlayVerse</h1>

      <nav className="space-y-3">
  <button className="flex w-full items-center gap-3 rounded-lg bg-blue-600 px-3 py-2 text-white">
  <LayoutDashboard size={20} />
  <span>Dashboard</span>
</button>

  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-800">
    <Gamepad2 size={20} />
    <span>Games</span>
  </button>

  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-800">
    <Trophy size={20} />
    <span>Leaderboard</span>
  </button>

  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-800">
    <Medal size={20} />
    <span>Achievements</span>
  </button>

  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-800">
    <User size={20} />
    <span>Profile</span>
  </button>

  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-800">
    <Settings size={20} />
    <span>Settings</span>
  </button>
</nav>
    </aside>
  );
}