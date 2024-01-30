import "./app.module.scss";
import Home from "./assets/components/Home/Home";
import Contact from "./assets/components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiences from "./assets/components/Experiences/Experiences";
import Projects from "./assets/components/Projects/Projects";
import NavBar from "./assets/components/NavBar/NavBar";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accueil" element={<Home />} />
          <Route path="/Expériences" element={<Experiences />} />
          <Route path="/Projets" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
