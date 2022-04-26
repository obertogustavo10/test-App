import React from 'react';
import { NavLink } from "react-router-dom";
import {Navbar, Container, Offcanvas, Nav} from 'react-bootstrap';
import Image from '../img/logo_agrology_white.svg';
import { BsPersonFill, BsHouseDoorFill, BsPatchCheck, BsPeopleFill, BsImageAlt, BsClipboardData, BsChevronRight } from "react-icons/bs";
import '../App.css';

export default function Nabvar() {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
    <Navbar.Brand href="#home">
      <img
        src={Image}
        width="150"
        height="50"
        className="d-inline-block align-top img-fluid"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Brand href="#"><BsPersonFill style={{marginBottom: 5}}/> Leonardo</Navbar.Brand>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header className="colorGreen" style={{}} closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3" >
         <NavLink className="buttonNavbar" to='/'><BsHouseDoorFill className="iconNabvar"/> Inicio <BsChevronRight className="iconDirection"/></NavLink>
          <NavLink className="buttonNavbar" to='/team' ><BsPeopleFill className="iconNabvar"/> Team <BsChevronRight className="iconDirection"/></NavLink>
          <NavLink className="buttonNavbar"to='/' ><BsClipboardData className="iconNabvar"/> Comunidad <BsChevronRight className="iconDirection"/></NavLink>
          <NavLink className="buttonNavbar" to='/'><BsPatchCheck className="iconNabvar"/> Certificaciones <BsChevronRight className="iconDirection"/></NavLink>
          <NavLink className="buttonNavbar"to='/' ><BsImageAlt className="iconNabvar"/> Mis campos <BsChevronRight className="iconDirection"/></NavLink>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
  <br></br>
</Navbar>
  )
}
