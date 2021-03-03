import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
  Button,
} from "reactstrap";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    const isLoggedIn = true;
  };

  return (
    <>
      {" "}
      {props.token ? (
        <div className="outernav">
          <Navbar light expand="md">
            <NavbarBrand className="brandnav" href="/">
              <strong>I8That</strong>
            </NavbarBrand>
            <NavbarToggler className="navtoggle" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav>
                <NavItem>
                  <NavLink href="#foodlog" className="linkcolor">
                    Log Your Food
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#getdietlogtable" className="linkcolor">
                    Get Your Dietlog By Date
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#foodlogtable" className="linkcolor">
                    Your Dietlog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#recipes" className="linkcolor">
                    Recipes
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <Button className="logout" onClick={props.clearToken}>
                    Logout
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      ) : null}
    </>
  );
};

export default Sitebar;
