type TopBarProps = {
  email: string;
};

export default function TopBar({ email }: TopBarProps) {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-8 py-4">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-gray-400">
          Welcome back to PlayVerse!
        </p>
      </div>

      <div className="rounded-full bg-gray-800 px-4 py-2 text-sm text-white">
        {email}
      </div>
    </header>
  );
}