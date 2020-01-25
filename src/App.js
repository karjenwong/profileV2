//<img src="/images/4.png" alt=test""/>
import React from "react";
import "./custom.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hero from "./Components/Hero";
import PortfolioGallery from "./Components/PortfolioGallery";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id="home" className="">
      <Navbar collapseOnSelect fixed="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="fontSize">
          <Nav>
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section id="hero" className="hero-bg">
        <Hero />
      </section>
      <section id="portfolio" className="offset">
        <PortfolioGallery />
      </section>
      <section id="about" className="compact offset">
        <About />
      </section>
      <section id="footer" className="compact offset">
        <Footer />
      </section>
    </div>
  );
}

export default App;
