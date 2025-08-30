import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./context/Dashboard/EmployeeDashboard";
import AdminDashboard from "./context/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"; // (not used yet, okay)
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // Tracks who is logged in: 'admin' | 'employee' | null
  const [user, setUser] = useState(null);

  // Read auth-related data from Context (may be null on first render)
  const AuthData = useContext(AuthContext);

  // ✅ Safer reads with default fallbacks while AuthData is null
  const employees = AuthData?.employees ?? [];
  const admin = AuthData?.admin ?? [];

  // On mount (and whenever AuthData becomes available), try to restore session
 // useEffect(() => {
    // ✅ correct arrow syntax for useEffect
    //if (AuthData) {
      //const raw = localStorage.getItem("loggedInUser"); // returns a string or null

      //if (raw) {
       // try {
         // const parsed = JSON.parse(raw); // { role: 'admin' | 'employee' }
        //  if (parsed?.role === "admin" || parsed?.role === "employee") {
         //   setUser(parsed.role); // ✅ restore to correct dashboard
         // }
       // } catch {
          // If JSON is broken, ignore and clear it (optional)
          // localStorage.removeItem("loggedInUser");
       // }
     // }
   // }
 // }, [AuthData]); // rerun when context becomes ready

  // Handle login from the Login component
  const handleLogin = (email, password) => {
    // (Optional) normalize inputs
    const e = (email || "").trim();
    const p = (password || "").trim();

    // Admin hardcoded check
    if (e === "admin@me.com" && p === "123") {
      setUser({role:"admin"});
      // ✅ store a tiny session object you can parse later
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log("user");
      return;
    }

    // Employee check against context employees list
    // NOTE: employees comes from AuthData?.employees ?? []
    const isEmployee =
      employees.find((emp) => emp.email === e && emp.password === p) != null;

    if (isEmployee) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
      console.log("working");
      return;
    }

    // Fallback: invalid creds
    alert("invalid credentials");
  };

  return (
    <>
      {/* Show Login only when user is not set */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {/* After login, render exactly one dashboard */}
      {user && (user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />)}
    </>
  );
};

export default App;
