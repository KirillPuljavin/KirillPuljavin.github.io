const Header = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Information </h1>

      <div className="menu">
        <button onClick={() => (location.href = "/kirillpuljavin.github.io/")}>
          <h3>Om Mig</h3>
        </button>
        <button
          onClick={() => (location.href = "/kirillpuljavin.github.io/details")}
        >
          <h3>Kunskaper</h3>
        </button>
        <button
          onClick={() => (location.href = "/kirillpuljavin.github.io/te4")}
        >
          <h3>TE4 Projekt</h3>
        </button>
        <button
          onClick={() => (location.href = "/kirillpuljavin.github.io/projects")}
        >
          <h3>Egna Projekt</h3>
        </button>
      </div>

      <hr style={{ margin: "0 -30px" }} />
    </>
  );
};

export default Header;
