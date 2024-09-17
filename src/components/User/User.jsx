import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./User.css"; 

function User() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); //Hook for navigation

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleAccountDetails = () => {
    navigate("/account-details");
  };

  const handleLogout = () => {
    console.log("Log Out clicked");
    // Lógica de logout aqui.
  };

  return (
    <div className="user-container">
      <div className="user-icon" onClick={handleToggle}>
      <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/user-male-circle.png" alt="user-male-circle"/>
      </div>
      {open && (
        <div className="user-menu">
          <ul>
            <li onClick={handleAccountDetails}>Account Details</li>
            <li onClick={handleLogout}>Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
