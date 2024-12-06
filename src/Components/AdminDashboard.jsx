import React from "react";
import { useAttendance } from "../Context/AttendanceContext";
import AttendanceTable from "../Components/AttendanceTable";
const AdminDashboard = () => {
  const { employees, attendance, addEmployee, removeEmployee } =
    useAttendance();

  return (
    <div>
      <h2>Employee Management</h2>
      <button
        onClick={() =>
          addEmployee({ id: Date.now(), name: `Employee ${employees.length + 1}` })
        }
      >
        Add Employee
      </button>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name}
            <button onClick={() => removeEmployee(emp.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Attendance Records</h2>
      <AttendanceTable attendance={attendance} />
      
    </div>
  );
};

export default AdminDashboard;
