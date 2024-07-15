import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Connect from "../src/pages/Connect.jsx";
import About from "../src/pages/About.jsx";
import Points from "../src/pages/Points.jsx";
import NavBar from "../src/components/NavBar.js";
import Home from "../src/pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Footer from "./components/Footer.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/points" element={<Points />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div class="min-h-screen">
      <Router>
        <div>
          <NavBar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
