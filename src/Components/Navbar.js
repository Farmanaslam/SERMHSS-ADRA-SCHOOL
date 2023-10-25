import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Navbar2() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top bg-dark-tertiary justify-content-center"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" href="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="nav-link"
              as={Link}
              to="/aboutus"
              
            >
              About Us
            </NavLink>
            <NavLink
              className="nav-link"
              as={Link}
              to="/events?loc=events"
              
            >
              Events
            </NavLink>
            <NavDropdown title="Our School" id="collasible-nav-dropdown">
              <NavLink
                className="dropdown-item"
                as={Link}
                to="/feeparticulars"
                
                activeStyle={{ fontWeight: "bold" }}
              >
                Fee Particulars
              </NavLink>
              <NavLink
                className="dropdown-item"
                as={Link}
                to="/exam"
                
                activeStyle={{ fontWeight: "bold" }}
              >
                Exam Schedule
              </NavLink>
              <NavLink
                className="dropdown-item"
                as={Link}
                to="/academic"
                
                activeStyle={{ fontWeight: "bold" }}
              >
                Academic Calender
              </NavLink>
              <NavLink
                className="dropdown-item"
                as={Link}
                to="/holiday"
                
                activeStyle={{ fontWeight: "bold" }}
              >
                Holiday List
              </NavLink>
            </NavDropdown>
            <NavLink
              className="nav-link"
              as={Link}
              to="/mandatory"
              
            >
              Mandatory Disclosure
            </NavLink>
            <NavLink
              className="nav-link"
              as={Link}
              to="/contact"
              
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
