import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "programs", label: "Programs" },
  { id: "admissions", label: "Admissions" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ current, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id) => {
    navigate(id);
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* BRAND */}
        <button className="nav-brand" onClick={() => go("home")}>
          <img
            src={logo}
            alt="Vision Family Academy Logo"
            className="brand-logo"
          />
          <div className="brand-words">
            <span className="bw-name">Vision Family Academy</span>
            <span className="bw-tag">…Eradicating Illiteracy</span>
          </div>
        </button>

        {/* NAVIGATION */}
        <ul className={`nav-list ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                className={`nl-btn ${current === n.id ? "active" : ""}`}
                onClick={() => go(n.id)}
              >
                {n.label}
              </button>
            </li>
          ))}

          <li>
            <button
              className="nl-enrol btn-wine"
              onClick={() => go("admissions")}
            >
              Enrol Now
            </button>
          </li>

          <li>
            <button className="nl-btn btn-admin" onClick={() => go("admin")}>
              Admin Login
            </button>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          className={`ham ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
