"use client";

import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Rapid AutoCare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="autofix-navbar-nav" />
        <Navbar.Collapse id="autofix-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/#services">Services</Nav.Link>
            <Nav.Link as={Link} href="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} href="/book-appointment" className="fw-bold text-warning">
              Book Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}