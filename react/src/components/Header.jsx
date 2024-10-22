const Header = () => {
  return (
    <>
      <div className="menu">
        <button onClick={() => (location.href = "/")}>
          <h3>Om Mig</h3>
        </button>
        <button onClick={() => (location.href = "/details")}>
          <h3>Kunskaper</h3>
        </button>
        <button onClick={() => (location.href = "/te4")}>
          <h3>TE4 Projekt</h3>
        </button>
        <button onClick={() => (location.href = "projects")}>
          <h3>Egna Projekt</h3>
        </button>
      </div>

      <h1 style={{ textAlign: "center" }}>Kirill Puljavin / Portfolio</h1>
      <hr style={{ margin: "0 -30px" }} />
    </>
  );
};

export default Header;
