import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About Us" },
  { id: "programs",   label: "Programs" },
  { id: "admissions", label: "Admissions" },
  { id: "contact",    label: "Contact" },
];

export default function Navbar({ current, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => { navigate(id); setOpen(false); };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => go("home")}>
          <div className="brand-shield">
            <span className="bs-top">VFA</span>
            <span className="bs-bot">★</span>
          </div>
          <div className="brand-words">
            <span className="bw-name">Vision Family Academy</span>
            <span className="bw-tag">…Eradicating Illiteracy</span>
          </div>
        </button>

        <ul className={`nav-list ${open ? "open" : ""}`}>
          {NAV.map(n => (
            <li key={n.id}>
              <button
                className={`nl-btn ${current === n.id ? "active" : ""}`}
                onClick={() => go(n.id)}
              >{n.label}</button>
            </li>
          ))}
          <li>
            <button className="nl-enrol btn-wine" onClick={() => go("admissions")}>
              Enrol Now
            </button>
          </li>
        </ul>

        <button className={`ham ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
}
