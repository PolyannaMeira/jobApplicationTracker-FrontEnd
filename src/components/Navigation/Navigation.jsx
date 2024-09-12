import { useState } from "react";
import "./HamburgerButton.css";

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`hamburger-button ${isOpen ? "hamburger-open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-line line1"></div>
        <div className="hamburger-line line2"></div>
        <div className="hamburger-line line3"></div>
      </button>

      {isOpen && (
        <nav className="nav-menu">
          <ul>
            <li>Account Details</li>
            <li>Agenda</li>
            <li>Create Job Profile</li>
            <li>Back to Home Page</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default HamburgerButton;
