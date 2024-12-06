import React, { createContext, useState, useContext } from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const addEmployee = (employee) =>
    setEmployees((prev) => [...prev, employee]);
  const updateEmployee = (id, updatedData) =>
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, ...updatedData } : emp))
    );
  const removeEmployee = (id) =>
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));

  const markAttendance = (attendanceRecord) =>
    setAttendance((prev) => [...prev, attendanceRecord]);

  return (
    <AttendanceContext.Provider
      value={{
        employees,
        attendance,
        addEmployee,
        updateEmployee,
        removeEmployee,
        markAttendance,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);
