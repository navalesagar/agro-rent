import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful (Demo)");
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#e3f2fd" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "30px", borderRadius: "10px", width: "300px" }}>
        <h2 style={{ textAlign: "center", color: "#1976d2" }}>Lab Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <button type="submit" style={{ width: "100%", padding: "10px", background: "#1976d2", color: "#fff", border: "none" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
