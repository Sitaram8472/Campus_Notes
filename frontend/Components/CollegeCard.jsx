import { ArrowRight } from "lucide-react";
import "../Styling/CollegeCard.css"; // optional for extra custom styling

export default function CollegeCard({ name, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-2xl p-5 text-left shadow-lg transition 
             hover:shadow-xl border border-gray-400 
             bg-[#0f083a] text-white Card_main"
    >
      <div className="flex items-start gap-4">
        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-slate-300">{description}</p>

          <span className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-300 group-hover:text-indigo-200">
            Browse <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </button>
  );
}