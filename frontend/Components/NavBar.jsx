import { Home as HomeIcon, Info, LogIn, LogOut, Sun, Moon, Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [isDark, setIsDark] = useState(theme === "dark");
  const [search, setSearch] = useState("");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  const handleSearch = () => {
    console.log("Searching:", search);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#140b50] p-3 shadow-lg flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        <div className="h-8 w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
        CampusNotes
      </div>

      {/* Center - Search */}
      <div className="flex items-center gap-2 flex-1 max-w-md mx-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="flex-1 px-3 py-2 rounded-l-lg bg-slate-800 text-white focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 rounded-r-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          <SearchIcon className="h-4 w-4 inline mr-1" /> Search
        </button>
      </div>

      {/* Right - Links */}
      <div className="flex items-center gap-3">
        <a
          href="/about"
          className="px-3 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition"
        >
          About
        </a>

        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 text-white hover:opacity-90 transition"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <a
          href="/home"
          className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          Home
        </a>

        <a
          href="/login"
          className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center gap-1"
        >
          Login <LogIn className="h-4 w-4" />
        </a>

        <a
          href="/logout"
          className="px-3 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition flex items-center gap-1"
        >
          Logout <LogOut className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}
