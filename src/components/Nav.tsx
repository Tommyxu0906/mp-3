import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/references">References</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;