import Tech from "../img/technologysvg.svg";
import General from "../img/general.svg";
import Business from "../img/business.svg";
import Sport from "../img/sport.svg";
import Health from "../img/health.svg";
import Science from "../img/science.svg";
import Entertaiment from "../img/entertaiment.svg";
import Brand from "../img/News_logo.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <div className="container"> */}
      <nav className="navbar navbar-dark bg-primary homeNav">
        <div className="container-fluid bungkus-nav">
          <a className="navbar-brand" href="/">
            <img
              src={Brand}
              alt="brand"
              width="100"
              className="d-inline-block navbra align-text-top"
            />
          </a>
        </div>
      </nav>
      <div className="d-flex justify-content-around home-container flex-wrap mt-5">
        <NavLink to="/general">
          <div className="card mb-3 mx-5 text-secondary border-secondary bg-white border-3 rounded start-fade mx-2">
            <img src={General} className="m-auto mt-4" width="100" alt="..." />
            <h5 className="card-title text-center mt-2">General</h5>
            <div className="card-body">
              <p className="card-text text-center">
                The latest news that is hot and busy in the world. Don't you
                miss something around you
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/technology">
          <div className="card mb-3 mx-5 text-primary border-primary bg-white border-3 rounded start-fade mx-2">
            <img src={Tech} className="m-auto mt-4" width="100" alt="..." />
            <h5 className="card-title text-center mt-2">Technology</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Latest technological developments in the world. Find
                intelligence in technology
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/business">
          <div className="card mb-3 mx-5 text-warning border-warning bg-white border-3 rounded start-fade mx-2">
            <img src={Business} className="m-auto mt-4" width="100" alt="..." />
            <h5 className="card-title text-center mt-2">Business</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Business developments that are trending in the world. Find a
                great business idea
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/science">
          <div className="card mb-3 mx-5 science  bg-white border-3 rounded start-fade mx-2">
            <img src={Science} className="m-auto mt-4" width="100" alt="..." />
            <h5 className="card-title text-center mt-2">Science</h5>
            <div className="card-body">
              <p className="card-text text-center">
                See the world of science and experiment in the world. Amaze you
                with science
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/health">
          <div className="card mb-3 mx-5 text-success border-success bg-white border-3 rounded start-fade mx-2">
            <img src={Health} className="m-auto mt-4" width="100" alt="..." />
            <h5 className="card-title text-center mt-2">Health</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Health is very important especially during this pandemic. Stay
                at Home, Stau Health
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/sport">
          <div className="card mb-3 mx-5 text-danger border-danger bg-white border-3 rounded start-fade mx-2">
            <img src={Sport} className="m-auto mt-4" width="100" alt="..." />
            <h5 className="card-title text-center mt-2">Sport</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Sports news to fill your spare time. Exercise and live a healthy
                life
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/entertaiment">
          <div className="card mb-3 mx-5 entertaiment bg-white border-3 rounded start-fade mx-2">
            <img
              src={Entertaiment}
              className="m-auto mt-4"
              width="100"
              alt="..."
            />
            <h5 className="card-title text-center mt-2">Entertaiment</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Entertainment world to fill family time. Don't forget the best
                show
              </p>
            </div>
          </div>
        </NavLink>
      </div>

      {/* </div> */}
    </>
  );
};
export default Home;
