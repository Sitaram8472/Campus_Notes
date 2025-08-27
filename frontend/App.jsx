import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar.jsx";
import Home from "./Page/Home.jsx";
import Jispage from "./JisCollege/Jispage.jsx";
import Nitpage from "./NarulaCollege/Nitpage.jsx";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-full from-slate-900 via-slate-950 to-emerald-950 bg-radial-faded text-slate-100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/jiscollege" element={<Jispage />} />
        <Route path="/narulacollege" element={<Nitpage />} />
      </Routes>
    </div>
  );
}
