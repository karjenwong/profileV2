import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Navbar bg="light" expand="lg">
      <Nav>
        <Navbar.Brand>Contact:</Navbar.Brand>
        <Nav.Link
          href="https://github.com/karjenwong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github.svg" alt="github" /> Github
        </Nav.Link>
        <Nav.Link
          href="https://github.com/karjenwong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin.svg" alt="linkedin" /> LinkedIn
        </Nav.Link>
        <Nav.Link href="tel:604-649-2209" rel="noopener noreferrer">
          <img src="/images/phone.svg" alt="phone" /> 604-649-2209
        </Nav.Link>
        <Nav.Link
          href="mailto:karjenwong@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/gmail.svg" alt="gmail" /> karjenwong@gmail.com
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default Footer;
