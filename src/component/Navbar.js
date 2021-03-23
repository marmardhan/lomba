import { NavLink } from "react-router-dom";
import Brand from "../img/News_logo.png";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <NavLink className="navbar-brand m-auto" to="/">
            <img src={Brand} alt="brand" width="90" />
          </NavLink>
        </div>
        <div className="link_nav mt-3 d-flex flex-wrap justify-content-evenly text-uppercase fw-lighter">
          <NavLink to="/" className="link-nav" activeClassName="text-dark">
            <span className="badge bg-primary fw-light mx-2 mb-1">Technology</span>
          </NavLink>
          <NavLink
            to="/business"
            className="link-nav"
            activeClassName="text-dark"
          >
            <span className="badge bg-primary fw-light mx-2 mb-1">
              Business
            </span>
          </NavLink>
          <NavLink to="/sport" className="link-nav" activeClassName="text-dark">
            <span className="badge bg-primary fw-light mx-2 mb-1">Sport</span>
          </NavLink>
          <NavLink
            to="/entertaiment"
            className="link-nav"
            activeClassName="text-dark"
          >
            <span className="badge bg-primary fw-light mx-2 mb-1">
              Entertaiment
            </span>
          </NavLink>
          <NavLink
            to="/health"
            className="link-nav"
            activeClassName="text-dark"
          >
            <span className="badge bg-primary fw-light mx-2 mb-1">Health</span>
          </NavLink>
          <NavLink
            to="/general"
            className="link-nav"
            activeClassName="text-dark"
          >
            <span className="badge bg-primary fw-light mx-2 mb-1">General</span>
          </NavLink>
          <NavLink
            to="/science"
            className="link-nav"
            activeClassName="text-dark"
          >
            <span className="badge bg-primary fw-light mx-2 mb-1">Science</span>
          </NavLink>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};
export default Navbar;
