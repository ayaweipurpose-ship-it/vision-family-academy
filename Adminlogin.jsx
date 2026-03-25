import { useState } from "react";
import "./AdminLogin.css";
import logo from "../assets/logo.jpeg";

const ADMINS = [
  { username: "principal", password: "2025VFC@principal", role: "Principal" },
  { username: "headmaster", password: "2025VFC@headmaster", role: "Headmaster" },
  { username: "administrator", password: "2025VFC@admin", role: "Administrator" },
];

export default function AdminLogin({ onLogin }) {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const change = (e) => {
    setCreds((c) => ({ ...c, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const user = ADMINS.find(
        (a) =>
          a.username.toLowerCase() === creds.username.trim().toLowerCase() &&
          a.password === creds.password
      );

      if (user) {
        // This is the "navigation" trigger
        onLogin(user); 
      } else {
        setError("Invalid username or password.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="admin-login">
      <div className="al-bg" />
      <div className="al-card">
        <div className="al-logo">
          <img src={logo} alt="Vision Family Academy Logo" />
        </div>
        <h2>Admin Portal</h2>
        <form onSubmit={submit} className="al-form">
          <div className="al-group">
            <label>Username</label>
            <input name="username" type="text" required value={creds.username} onChange={change} />
          </div>
          <div className="al-group">
            <label>Password</label>
            <div className="al-pass-wrap">
              <input name="password" type={showPass ? "text" : "password"} required value={creds.password} onChange={change} />
              <button type="button" className="al-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          {error && <div className="al-error">⚠️ {error}</div>}
          <button type="submit" className="al-submit btn-wine" disabled={loading}>
            {loading ? <span className="al-spinner" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}