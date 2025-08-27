import DeptSec from "./DeptSec.jsx";
import { Deptdata } from "./Deptdata.js" // make sure path is correct

export default function Jispage() {
  return (
    <div className="p-5 space-y-4">
      <h1 className="text-2xl font-bold text-white mb-5">
        JIS College of Engineering
      </h1>
      {Deptdata.map((dept) => (
        <DeptSec
          key={dept.id}
          id={dept.id}
          departments={dept.departments.join(", ")}
          description={dept.description}
        />
      ))}
    </div>
  );
}
