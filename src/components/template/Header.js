import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar,Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
 
 <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Rr.v.0.2  </Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home </NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/contact">contact</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/About">About</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/Api">Api</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/Conditional">Conditional</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/Eventhandle">Event.Handle</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/Exer">Exer-Add</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/E_view">E-View</NavLink>
    </Nav>
</Navbar>

    </div>
  );
};

export default Header;
