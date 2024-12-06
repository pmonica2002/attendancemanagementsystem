import React from "react";
import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login("admin")}
         style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}>Login as Admin</button><br/><br/>
      <button onClick={() => login("employee")}
         style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}>Login as Employee</button>
    </div>
  );
};

export default LoginPage;
