import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        Information
      </h1>

      <div
        className="menu"
        style={{ display: "flex", justifyContent: "center", gap: "15px" }}
      >
        <button onClick={() => navigate("/")}>
          <h3 style={{ margin: "0", padding: "10px 20px" }}>Om Mig</h3>
        </button>
        <button onClick={() => navigate("/details")}>
          <h3 style={{ margin: "0", padding: "10px 20px" }}>Kunskaper</h3>
        </button>
        <button onClick={() => navigate("/interns")}>
          <h3 style={{ margin: "0", padding: "10px 20px" }}>Praktik</h3>
        </button>
        <button onClick={() => navigate("/publicWorks")}>
          <h3 style={{ margin: "0", padding: "10px 20px" }}>Publika Projekt</h3>
        </button>
      </div>

      <hr
        style={{
          margin: "20px 0",
          borderColor: "var(--gray)",
          borderWidth: "1px",
        }}
      />
    </>
  );
};

export default Header;
