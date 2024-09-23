
import "./NavBar.css"; 
import HamburgerButton from "../HamburgerButton/HamburgerButton";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-button">
        <HamburgerButton/> 
      </div>
      <div className="navbar-tittle">
        <h1>Job Application Tracker</h1>
        
      </div>
     
      <div></div>
    </nav>
  );
}

export default Navbar;