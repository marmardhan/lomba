import { NavLink } from "react-router-dom";
import Brand from "../img/News_logo.svg";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink to="/" exact>
            <img src={Brand} alt="brand" width="100" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-primary"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/general" className="nav-link">
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/technology" className="nav-link">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/business" className="nav-link">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/science" className="nav-link">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/health" className="nav-link">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sport" className="nav-link">
                  Sport
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/entertaiment" className="nav-link">
                  Entertaiment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5">
        <div className="pt-5">
          <div className="pt-5">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
