import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import initiales from "../../img/svg/YT-bold.svg";
import { sectionIds } from "./sectionIds";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      // Adjust the margin Top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={initiales} alt="logo" />
      </Link>
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        {sectionIds.map((sectionId, i) => (
          <li key={i} onClick={() => scrollToSection(sectionId)}>
            <NavLink
              to= {`/${sectionId}`} 
              style={({ isActive }) => ({
                color: isActive ? "#303030" : "",
              })}
            >
              {sectionId}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
