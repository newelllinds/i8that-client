import React from "react";
import bgimage from "../images/headerimage.jpg";
import { Jumbotron } from "reactstrap";
import logo from "../images/i8logo-01.jpg";

const Header = () => {
  return (
    <div className="container">
      <Jumbotron
        className="jumbotron"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      ></Jumbotron>
      <div className="bar"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="logo" src={logo} alt="logo" />
      </div>
      <hr />
      <h4 className="text-center">Welcome to I8That Premier Dietlog!</h4>
    </div>
  );
};

export default Header;
