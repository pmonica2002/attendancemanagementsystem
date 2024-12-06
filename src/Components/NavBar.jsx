import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "10px"  }}>
        Home
      </Link>
      {user && user.role === "admin" && (
        <Link to="/admin" >
          Admin
        </Link>
      )}
      {user && user.role === "employee" && (
        <Link to="/employee" style={{ marginRight: "40px" }}>
          Employee
        </Link>
      )}
      {user ? <button onClick={logout}
       style={{
        padding: "10px 20px",
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        float:"right"
      }}>Logout</button> : null}
    </nav>
  );
};

export default Navbar;
