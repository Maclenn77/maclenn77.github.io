import React from "react";
import './Navbar.css'
import { Navbar } from "react-bootstrap";

const Navbar = () => {
  <Navbar bg="light" className='sticky-top'>
    <a class="navbar-brand" style="color:white; font-weight:bold" href="index.html">Juan Paulo</a>
    <div class="d-flex">
      <a class="mx-2" href="#Portfolio">Portfolio</a>
      <a class="mx-2" href="#About">About</a>
      <a class="mx-2" href="#Contact">Contact</a>
    </div>
  </Navbar>  
}

export default Navbar;