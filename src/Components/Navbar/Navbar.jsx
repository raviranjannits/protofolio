import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

function Navbar({ darkMode, toggleDarkMode }) {
  const [showLinks, setShowLinks] = useState(false);
  const [activeSection, setactiveSection] = useState(" ");
  return (
    <div>
      <div className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        <div className="left">
          <div className="icon-container">
            <Icon
              onClick={toggleDarkMode}
              className="dark-icon"
              icon={darkMode ? "humbleicons:sun" : "humbleicons:moon"}
            />
          </div>
          <a
          
                        href="https://www.linkedin.com/in/ravi-nits/"
            target="_blank"
            rel="noreferrer"
          >
            CONNECT
          </a>
        </div>

        <div
          className={showLinks ? "mobile-navbar right" : "right"}
          style={{ sticky: true }}
        >
          <ul>
            <Link
              spy={true}
              to="Home"
              smooth={true}
              activeClass="activeClass"
              onClick={() => setShowLinks(!showLinks)}
              onSetActive={() => setactiveSection("Home")}
            >
              <li className={activeSection === "Home" ? "active" : ""}>Home</li>
            </Link>
            <Link
              spy={true}
              to="About"
              smooth={true}
              onClick={() => setShowLinks(!showLinks)}
              onSetActive={() => setactiveSection("About")}
            >
              <li className={activeSection === "About" ? "active" : ""}>
                About
              </li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              onClick={() => setShowLinks(!showLinks)}
              onSetActive={() => setactiveSection("Services")}
            >
              <li className={activeSection === "Services" ? "active" : ""}>
                Skills
              </li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
              onClick={() => setShowLinks(!showLinks)}
              onSetActive={() => setactiveSection("Projects")}
            >
              <li className={activeSection === "Projects" ? "active" : ""}>
                Projects
              </li>
            </Link>
            <Link
              spy={true}
              to="Contact"
              smooth={true}
              onClick={() => setShowLinks(!showLinks)}
              onSetActive={() => setactiveSection("Contact")}
            >
              <li className={activeSection === "Contact" ? "active" : ""}>
                Contact
              </li>
            </Link>
          </ul>
          <div className={showLinks ? "hamburger-menu-2" : "hamburger-menu"}>
            <Icon
              icon="game-icons:hamburger-menu"
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
