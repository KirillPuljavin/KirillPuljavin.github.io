import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLightMode, setIsLightMode] = useState(false); // Default to dark mode

  useEffect(() => {
    document.body.classList.add("darkmode");

    if (isLightMode) {
      document.body.classList.add("lightmode");
      document.body.classList.remove("darkmode");
    } else {
      document.body.classList.add("darkmode");
      document.body.classList.remove("lightmode");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div id="header">
      <h1
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        Information
      </h1>
      <hr
        style={{
          width: "calc(100% + 100px)",
          marginLeft: "-50px",
          marginRight: "-50px",
        }}
      />
      <div id="navMenu">
        <button onClick={() => navigate("/")}>
          <h3>Om Mig</h3>
        </button>
        <button onClick={() => navigate("/details")}>
          <h3>Kunskaper</h3>
        </button>
        <button onClick={() => navigate("/interns")}>
          <h3>Praktik</h3>
        </button>
        <button onClick={() => navigate("/publicWorks")}>
          <h3>Publika Projekt</h3>
        </button>
      </div>
      <hr
        style={{
          width: "calc(100% + 100px)",
          marginLeft: "-50px",
          marginRight: "-50px",
        }}
      />
      <button id="modeToggleButton" onClick={toggleTheme}>
        {isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default Header;
