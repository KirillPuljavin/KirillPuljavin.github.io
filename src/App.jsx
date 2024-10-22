/* eslint-disable react/prop-types */
import "./Stylesheet.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Details from "./routes/Details";
import Projects from "./routes/Projects";
import TE4 from "./routes/TE4";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = ({ children }) => {
  return (
    <>
      <div id="container">
        <Header />
        <br />
        {children}
      </div>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/kirillpuljavin.github.io/" element={<Main />} />
          <Route
            path="/kirillpuljavin.github.io/details"
            element={<Details />}
          />
          <Route path="/kirillpuljavin.github.io/te4" element={<TE4 />} />
          <Route
            path="/kirillpuljavin.github.io/projects"
            element={<Projects />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
