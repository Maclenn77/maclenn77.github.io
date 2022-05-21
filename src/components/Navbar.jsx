import React from "react";
import './Navbar.css'
import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
   return(
    <Navbar className='sticky-top'>
    <Container>
      <Navbar.Brand className="nav" href="index.html" style={{color:"white", fontWeight:"bold"}}>Juan Paulo</Navbar.Brand>
    </Container>
    
    <div className="d-flex">
      <a className="mx-2" href="#Portfolio">Portfolio</a>
      <a className="mx-2" href="#About">About</a>
      <a className="mx-2" href="#Contact">Contact</a>
    </div>
  </Navbar>
   )
}

export default Nav;