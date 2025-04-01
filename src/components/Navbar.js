import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <BootstrapNavbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <BootstrapNavbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <span className="dash"> - </span>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <span className="dash"> - </span>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <span className="dash"> - </span>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/Yumna-Alsh/project-portfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="mailto:yomnaalghalib@gmail.com">
                  <img src={navIcon3} alt="Email" />
                </a>
              </div>
            </span>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </Router>
  );
};
