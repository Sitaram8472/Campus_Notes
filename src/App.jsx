import { useEffect, useState } from 'react';
import Home from './Page/Home';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-full from-slate-900 via-slate-950 to-emerald-950 bg-radial-faded text-slate-100">
      <Home theme={theme} setTheme={setTheme} />
    </div>
  );
}