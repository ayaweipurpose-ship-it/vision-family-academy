import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

import AdminLogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";

import "./styles/index.css";

// ... keep your imports ...

export default function App() {
  const [page, setPage] = useState("home");
  const [adminUser, setAdminUser] = useState(
    () => JSON.parse(localStorage.getItem("adminUser")) || null,
  );

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (adminUser) localStorage.setItem("adminUser", JSON.stringify(adminUser));
    else localStorage.removeItem("adminUser");
  }, [adminUser]);

  // --- FIX START ---
  if (page === "admin") {
    // If not logged in, show Login and pass the login function
    if (!adminUser) {
      return <AdminLogin onLogin={(user) => setAdminUser(user)} />;
    }
    // If logged in, show Dashboard
    return (
      <AdminDashboard
        admin={adminUser}
        onLogout={() => {
          setAdminUser(null);
          setPage("home");
        }}
      />
    );
  }
  // --- FIX END ---

  const pages = {
    home: Home,
    about: About,
    programs: Programs,
    admissions: Admissions,
    contact: Contact,
    register: Register,
  };

  const Page = pages[page] || Home;

  return (
    <div className="app">
      <Navbar current={page} navigate={navigate} />
      <main>
        <Page navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
