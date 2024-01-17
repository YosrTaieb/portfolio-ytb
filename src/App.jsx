import "./app.module.scss"
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/components/Home/Home";
import Contact from "./assets/components/Contact/Contact";

import NavBar from "./assets/components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
