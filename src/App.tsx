import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import References from "./pages/References";

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
