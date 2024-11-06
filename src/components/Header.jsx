import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Information </h1>

      <div className="menu">
        <button onClick={() => navigate("/")}>
          <h3>Om Mig</h3>
        </button>
        <button onClick={() => navigate("/details")}>
          <h3>Kunskaper</h3>
        </button>
        <button onClick={() => navigate("/interns")}>
          <h3> Interns </h3>
        </button>
        <button onClick={() => navigate("/publicWorks")}>
          <h3> Public Works </h3>
        </button>
      </div>

      <hr style={{ margin: "0 -30px" }} />
    </>
  );
};

export default Header;
