import { useNavigate } from "react-router-dom";

export default function DeptSec({ id, departments, description }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/college/${id}`)}
      className="group w-full rounded-3xl border border-white/10 p-5 text-left shadow-lg hover:bg-white/10"
    >
      <h2>{departments}</h2>
      <p>{description}</p>
    </button>
  );
}
