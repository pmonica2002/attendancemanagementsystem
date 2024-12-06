import React from "react";

const AttendanceTable = ({ attendance }) => {
  return (
    <div style={{ overflowX: "auto", marginTop: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Employee Name</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length > 0 ? (
            attendance.map((record, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{record.employeeName}</td>
                <td style={tableCellStyle}>
                  {new Date(record.date).toLocaleString()}
                </td>
                <td style={tableCellStyle}>{record.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ ...tableCellStyle, textAlign: "center" }}>
                No attendance records available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
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

export default AttendanceTable;
