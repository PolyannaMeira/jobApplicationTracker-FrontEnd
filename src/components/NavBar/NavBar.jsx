
import "./NavBar.css"; 
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import User from "./../User/User";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-button">
        <HamburgerButton/> 
      </div>
      <div className="navbar-tittle">
        <h1>Job Application Tracker</h1>
        
      </div>
     
      <User/>
    </nav>
  );
}

export default Navbar;