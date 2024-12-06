import React, { useState } from "react";
import { useAttendance } from "../Context/AttendanceContext";

const EmployeeDashboard = () => {
  const { attendance, markAttendance } = useAttendance();
  const [status, setStatus] = useState("");
  const handleMarkAttendance = () => {
    if (!status) {
      alert("Please select your attendance status!");
      return;
    }

    markAttendance({
      employeeName: "John Doe",
      status: status,
      date: new Date().toISOString(),
    });

    setStatus(""); 
  };

  const employeeAttendance = attendance.filter(
    (record) => record.employeeName === "John Doe" 
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Dashboard</h2>

      
      <div style={{ marginBottom: "20px" }}>
        <h3>Mark Your Attendance</h3>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        >
          <option value="">Select Status</option>
          <option value="Present">Present</option>
          <option value="Late">Late</option>
          <option value="Absent">Absent</option>
        </select>
        <button
          onClick={handleMarkAttendance}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      {/* Attendance History Section */}
      <div>
        <h3>Your Attendance History</h3>
        {employeeAttendance.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Date</th>
                <th style={tableHeaderStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {employeeAttendance.map((record, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>
                    {new Date(record.date).toLocaleString()}
                  </td>
                  <td style={tableCellStyle}>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No attendance records found.</p>
        )}
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  textAlign: "left",
  border: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

export default EmployeeDashboard;
