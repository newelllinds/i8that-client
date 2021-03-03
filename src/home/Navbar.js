import React, { useState } from "react";
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
    <div>
      {" "}
      {props.token ? (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">I8That</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="navbar1" className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#foodlog">Log Food</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#foodlogtable">Diet Log</NavLink>
                <NavItem>
                  <NavLink href="#recipes">Recipes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#getdietlogtable">
                    Get Your Diet Log By Date
                  </NavLink>
                </NavItem>
              </NavItem>
              <NavItem>
                <Button className="logout" onClick={props.clearToken}>
                  Logout
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      ) : null}
    </div>
  );
};

export default Sitebar;
