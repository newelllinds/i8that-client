import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  NavLink,
} from "reactstrap";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <>
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

      {/* <div >
                <Link to="/recipes/Recipes">Recipes</Link>

            </div> */}

      {/* <Switch>
                    <Route exact path="/recipes/Recipes"><Recipes /></Route>
                </Switch> */}
    </>
  );
};

export default Sitebar;
