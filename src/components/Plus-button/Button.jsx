import { useState } from "react";
import "./Button.css";

function AddButton() {
  return (
    <button className="add-button" onClick={handleClick}>
      +
    </button>
  );
}

export default AddButton;
