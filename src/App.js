import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connect from "../src/pages/Connect";
import About from "../src/pages/About";
import Points from "../src/pages/Points";
import NavBar from "../src/components/NavBar";
import Home from "../src/pages/Home";
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
        </div>
      </Router>
    </div>
  );
}

export default App;
