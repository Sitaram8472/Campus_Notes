import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

// import Navbar from "../Components/NavBar.jsx";
import Hero from "../Components/Hero.jsx";
import CollegeCard from "../Components/CollegeCard.jsx";
import { colleges as seed } from "../Data/Colleges.js";
import Footer from "../Components/Footer.jsx";

export default function Home() {
  // for page navigate
  const collegeRoutes = {
    jis: "/jiscollege",
    narula: "/narulacollege",
  };

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const colleges = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return seed;
    return seed.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      {/* <Navbar theme={theme} setTheme={setTheme} /> */}
      <Hero />

      {/* Colleges Section */}
      <section id="colleges" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Colleges</h2>
          <span className="text-sm text-slate-300">
            {colleges.length} shown
          </span>
        </div>

        <div className="mb-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter colleges..."
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {colleges.map((c) => (
            <CollegeCard
              key={c.id}
              name={c.name}
              description={c.description}
              onClick={() => {
                const route = collegeRoutes[c.id];
                if (route) navigate(route);
                else console.warn("No route for this college:", c.name);
              }}
            />
          ))}
        </div>
      </section>
    
      <Footer />
    </>
  );
}
