/* eslint-disable react/prop-types */
import './PlusButton.css';
import { useNavigate } from "react-router-dom"; 


function PlusButton() {
  
  const navigate = useNavigate(); //Hook for navigation

  const handleJobProfileForm = () => {
  navigate("/JobProfileForm");}

  return (
    <button className="add-button" onClick={handleJobProfileForm }>
      +
    </button>
   
  );
  
}

export default PlusButton;
