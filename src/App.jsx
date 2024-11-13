import "./styles/general.scss";
import "./styles/dark-mode.scss";
import "./styles/light-mode.scss";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Details from "./routes/Details";
import Interns from "./routes/Interns";
import PublicWorks from "./routes/PublicWorks";

import Header from "./components/Header";
import Footer from "./components/Footer";

/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <>
      <div id="container">
        <Header />
        <br />
        {children} {/* PAGE CONTENT */}
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
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<Details />} />
          <Route path="/interns" element={<Interns />} />
          <Route path="/publicWorks" element={<PublicWorks />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
