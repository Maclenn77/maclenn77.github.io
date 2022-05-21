import React from "react";
import './Navbar.css'
import { Container, Navbar } from "react-bootstrap";

const Navbar = () => {
  <Navbar bg="light" className='sticky-top'>
    <Container>
      <Navbar.Brand className="nav" style="color:white; font-weight:bold" href="index.html">Juan Paulo</Navbar.Brand>
    </Container>
    
    <div class="d-flex">
      <a class="mx-2" href="#Portfolio">Portfolio</a>
      <a class="mx-2" href="#About">About</a>
      <a class="mx-2" href="#Contact">Contact</a>
    </div>
  </Navbar>  
}

export default Navbar;