import { useState } from "react";

const ButtonGroup = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleYesClick = () => {
    window.location.href = "/hospital";
  };

  const handleNoClick = () => {
    window.location.href = "/lab";
  };

  const yesButtonStyle = {
    flex: hoveredButton === "yes" ? "1.5" : "calc(1.25 + var(--_s, 0))",
    minWidth: "0",
    fontSize: "40px",
    fontWeight: "bold",
    height: "1.8em",
    cursor: "pointer",
    color: hoveredButton === "yes" ? "#FFF" : "#000",
    border: "5px solid",
    borderColor: hoveredButton === "yes" ? "#000" : "#D9D9D9",
    background:
      hoveredButton === "yes" ? "var(--hovered-conic-gradient-yes)" : "#D9D9D9",
    clipPath: "polygon(0 0, 100% 0, calc(100% - 0.577 * 1.8em) 100%, 0 100%)",
    padding: "0 calc(0.288 * 1.8em) 0 0",
    margin: "0 calc(-0.288 * 1.8em) 0 0",
    boxSizing: "border-box",
    transition: "flex 0.4s",
    outline: "none",
  };

  const noButtonStyle = {
    flex: hoveredButton === "no" ? "2" : "calc(0.75 + var(--_s, 0))",
    minWidth: "0",
    fontSize: "40px",
    fontWeight: "bold",
    height: "1.8em",
    cursor: "pointer",
    color: hoveredButton === "no" ? "#FFF" : "#000",
    border: "5px solid",
    borderColor: hoveredButton === "no" ? "#000" : "#D9D9D9",
    background:
      hoveredButton === "no" ? "var(--hovered-conic-gradient-no)" : "#D9D9D9",
    clipPath: "polygon(calc(0.577 * 1.8em) 0, 100% 0, 100% 100%, 0 100%)",
    padding: "0 0 0 calc(0.288 * 1.8em)",
    margin: "0 0 0 calc(-0.288 * 1.8em)",
    boxSizing: "border-box",
    transition: "flex 0.4s",
    outline: "none",
  };

  return (
    <div className="h-auto flex items-center justify-center bg-white">
      <div
        className="buttons"
        style={{ display: "flex", width: "100%", gap: "10px" }}
      >
        <button
          className="yes-btn"
          style={yesButtonStyle}
          onMouseEnter={() => handleMouseEnter("yes")}
          onMouseLeave={handleMouseLeave}
          onClick={handleYesClick}
        >
          Hospitals
        </button>
        <button
          className="no-btn"
          style={noButtonStyle}
          onMouseEnter={() => handleMouseEnter("no")}
          onMouseLeave={handleMouseLeave}
          onClick={handleNoClick}
        >
          Labs
        </button>
      </div>
    </div>
  );
};

const styles = `
  .buttons {
    display: flex;
    width: 100%;
    gap: 10px;
    --b: 5px; /* the border thickness */
    --h: 1.8em; /* the height */
    --hovered-conic-gradient-yes: conic-gradient(at calc(100% - 1.3 * var(--b)) 0, #000 209deg, #2BB673 211deg);
    --hovered-conic-gradient-no: conic-gradient(from -90deg at calc(1.3 * var(--b)) 100%, #000 119deg, #2BB673 121deg);
  }

  .yes-btn:hover {
    background: var(--hovered-conic-gradient-yes);
    border-color: #000;
    color: #FFF;
  }

  .no-btn:hover {
    background: var(--hovered-conic-gradient-no);
    border-color: #000;
    color: #FFF;
  }
`;

const App = () => {
  return (
    <div>
      <style>{styles}</style>
      <ButtonGroup />
    </div>
  );
};

export default App;
