import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav__content">
        <div className="nav__brand">
          <span className="nav__brand-mark" />
          <span>Anupa CJ</span>
        </div>
        <nav className="nav__links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink to="/photos" className={({ isActive }) => (isActive ? "active" : "")}
          >
            Photos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
