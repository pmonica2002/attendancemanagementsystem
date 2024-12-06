import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/AdminPage";
import EmployeePage from "./Pages/EmployeePage";
import LoginPage from "./Pages/login";
import Navbar from "./Components/NavBar";
import { AuthProvider } from "./Context/AuthContext";
import { AttendanceProvider } from "./Context/AttendanceContext";


function App() {
  return (
    <AuthProvider>
      <AttendanceProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            
            <Route path="/employee" element={<EmployeePage />} />
          </Routes>
        </Router>
      </AttendanceProvider>
    </AuthProvider>
  );
}

export default App;

