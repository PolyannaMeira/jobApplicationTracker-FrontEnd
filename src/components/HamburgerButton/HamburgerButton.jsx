import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './HamburgerButton.css'



  function HamburgerButton() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); //Hook for navigation
  
    const toggleMenu  = () => {
      setIsOpen(!isOpen);
    };
  
    const handleAccountDetails = () => {
      navigate("/account-details");
    };

    const handleCreateJobProfile = () => {
      navigate ("/JobProfileForm");
    }

    const handleAgenda = () => {
      navigate ( "/agenda");
    }
  
    const handleLogout = () => {
      navigate ("/")
    };

  return (
    <>
      <button
        className={`hamburger-button ${open ? "hamburger-open" : ""}`}
        onClick={toggleMenu }
      >
        <div className="hamburger-line line1"></div>
        <div className="hamburger-line line2"></div>
        <div className="hamburger-line line3"></div>
      </button> 

      {isOpen && (
        <nav className="nav-menu">
          <ul>
            <li onClick={handleAccountDetails}>Account Details</li>
            <li onClick={handleAgenda}>Agenda</li>
            <li onClick={handleCreateJobProfile}>Create Job Profile</li>
            <li onClick={handleLogout}>Log Out</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default HamburgerButton;