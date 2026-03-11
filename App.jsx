import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import "./styles/index.css";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = {
    home: Home,
    about: About,
    programs: Programs,
    admissions: Admissions,
    contact: Contact,
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
