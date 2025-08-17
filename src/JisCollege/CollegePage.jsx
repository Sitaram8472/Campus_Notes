import DeptSec from "./DeptSec.jsx";
import { Deptdata } from "./Deptdata";

export default function CollegePage() {
  return (
    <div className="p-5 space-y-4">
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
