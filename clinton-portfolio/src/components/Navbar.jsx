import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        <a
          className="navbar-brand"
          href="#home"
          onClick={closeMenu}
        >
          Clinton Juma<span className="text-primary">.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="#skills"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="#education"
                onClick={closeMenu}
              >
                Education
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;