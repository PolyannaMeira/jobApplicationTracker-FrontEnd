import './PlusButton.css';

function PlusButton() {
  const handleClick = () => {
    console.log('Plus button clicked');
  };

  return (
    <button className="add-button" onClick={handleClick}>
      +
    </button>
  );
}

export default PlusButton;