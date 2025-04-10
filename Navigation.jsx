import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="flex gap-4 mt-2">
      <NavLink to="/" className="hover:underline">About Me</NavLink>
      <NavLink to="/portfolio" className="hover:underline">Portfolio</NavLink>
      <NavLink to="/contact" className="hover:underline">Contact</NavLink>
      <NavLink to="/resume" className="hover:underline">Resume</NavLink>
    </nav>
  );
}
