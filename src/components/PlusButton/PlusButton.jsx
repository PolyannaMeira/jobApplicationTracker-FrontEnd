import { handleClick } from "react";
import "./Button.css";

function PlusButton() {
  return (
    <button className="add-button" onClick={handleClick}>
      +
    </button>
  );
}

export default PlusButton;
