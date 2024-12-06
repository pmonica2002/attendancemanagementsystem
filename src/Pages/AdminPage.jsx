import React from "react";
 
import { useAttendance } from "../Context/AttendanceContext";
import AttendanceTable from "../Components/AttendanceTable";

const AdminPage = () => {
  const { employees, attendance, addEmployee, removeEmployee } =
    useAttendance();

  return (
    <div>
      
      <h1>Admin Dashboard</h1>
     
      {/* Employee Management */}
      <button onClick={() => addEmployee({ id: Date.now(), name: "New Employee" })}>
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

      {/* Attendance Management */}
      <h2>Attendance Records</h2>
      <AttendanceTable attendance={attendance} />
      <ul>
        {attendance.map((record, idx) => (
          <li key={idx}>
            {record.employeeName} - {record.status}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default AdminPage;
