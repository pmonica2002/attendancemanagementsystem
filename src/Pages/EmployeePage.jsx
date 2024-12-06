import React from "react";
import { useAttendance } from "../Context/AttendanceContext";
import EmployeeDashboard from "../Components/EmployeeDashboard";
const EmployeePage = () => {
  const { attendance, markAttendance } = useAttendance();

  return (
    <div>
      
      <EmployeeDashboard/>
     
    </div>
  );
};

export default EmployeePage;
