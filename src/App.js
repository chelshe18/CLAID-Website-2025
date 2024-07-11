import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connect from "../src/pages/Connect.jsx";
import About from "../src/pages/About.jsx";
import Points from "../src/pages/Points.jsx";
import NavBar from "../src/components/NavBar.js";
import Home from "../src/pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/points" element={<Points />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
