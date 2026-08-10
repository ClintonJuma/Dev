import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        <a className="navbar-brand" href="#home">
          Clinton Juma<span className="text-primary">.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#contact">
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