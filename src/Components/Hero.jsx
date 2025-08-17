import "../Styling/Hero.css";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24 hero_main">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(124,58,237,0.25),transparent)]" />

      <div className="relative text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-emerald-200 bg-clip-text text-transparent">
            Study resources, beautifully organised.
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Browse from College → Department → Subject → Resources. Find notes, question papers, assignments and syllabi in seconds.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#colleges" className="rounded-2xl bg-indigo-600 px-5 py-2.5 text-sm font-medium shadow hover:bg-indigo-500">Get started</a>
          <a href="#colleges" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10">See colleges ↓</a>
        </div>
      </div>
    </section>
  );
}