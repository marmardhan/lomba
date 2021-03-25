import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  const myStyle = {
    display: "inline-block",
    // borderRight: "1px solid rgba(0, 0, 0,.3)",
    margin: 0,
    marginTop: "100px",
    marginRight: "20px",
    padding: "10px 23px 10px 0",
    fontSize: "30px",
    fontWeight: 500,
    verticalAlign: "top",
  };
  const myOtherStyle = {
    display: "inline-block",
    textAlign: "left",
    lineHeight: "49px",
    height: "49px",
    fontWeight: "500px",
    verticalAlign: "middle",
  };

  const myDiv = {
    color: "#000",
    background: "#fff",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-100px",
    justifyContent: "center",
  };

  return (
    <>
      <div style={myDiv}>
        <h1 style={myStyle}>404</h1>
        <div style={myOtherStyle}>
          <h2>This page could not be found</h2>
          <div className="row">
            <div className="col text-center">
              <NavLink to="/">
                <button className="btn btn-primary ">Back Home</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageNotFound;
