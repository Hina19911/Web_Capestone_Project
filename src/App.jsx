import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./context/Dashboard/EmployeeDashboard";
import AdminDashboard from "./context/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"; // (unused for now)
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // Tracks who is logged in: 'admin' | 'employee' | null
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null); // (unused for now)

  const AuthData = useContext(AuthContext);

  // Safe reads
  const employees = AuthData?.employees ?? [];
  const admin = AuthData?.admin ?? [];

  // Restore session on mount
  useEffect(() => {
    const raw = localStorage.getItem("loggedInUser");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw); // { role: "admin" | "employee" }
      if (parsed?.role === "admin" || parsed?.role === "employee") {
        setUser(parsed.role);
      }
    } catch {
      localStorage.removeItem("loggedInUser");
    }
  }, []);

  // Handle login from the Login component
  const handleLogin = (email, password) => {
    // normalize
    const e = (email || "").trim();
    const p = (password || "").trim();

    // Admin hardcoded check
    if (e === "admin@me.com" && p === "123") {
      setUser("admin"); // keep user as a string
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log("Logged in as admin");
      return;
    }

    // Employee check against context employees list
    const found = employees.find((emp) => emp.email === e && emp.password === p);
    if (found) {
      setUser("employee")
      setLoggedInUserData(employees)
      setLoggedInUserData(found);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", firstName: found.firstName }));
      console.log("Logged in as employee");
      return;
    }

    // Fallback: invalid creds
    alert("invalid credentials");
  };

  return (
    <>
      {/* Show Login only when user is not set */}
      {!user ? <Login handleLogin={handleLogin} /> : null}

      {/* After login, render exactly one dashboard */}
      {user && (user === "admin" ? <AdminDashboard /> : <EmployeeDashboard data={loggedInUserData}/>)}
    </>
  );
};

export default App;

