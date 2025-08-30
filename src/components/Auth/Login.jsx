import React, { useState } from "react";

// ⬇️ accept handleLogin from parent (App.jsx)
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault(); // stop page refresh

    console.log("email is", email);
    console.log("password is", password);

    // ✅ call parent handler to set user state (this triggers dashboard render)
    handleLogin(email.trim(), password.trim());

    // optional: clear fields after attempting login
    setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-2 border-green-600 p-6 rounded-lg">
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-80">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("email working");
            }}
            required
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className="border border-gray-300 rounded px-3 py-2"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="border border-gray-300 rounded px-3 py-2"
          />

          <button type="submit" className="bg-black text-white rounded px-4 py-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
