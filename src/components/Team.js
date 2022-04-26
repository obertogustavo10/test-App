import React from 'react';
import { Link } from 'react-router-dom';
import {Col, Row, Container, Button } from 'react-bootstrap';
import Title from './Title';
import Profile from '../img/photo_agustin_barberis.jpg';
import Profile1 from '../img/photo_agustin_sanchez_sorondo.jpg';
import Profile2 from '../img/photo_nicolas_moguilner.jpg';
import '../App.css';


export default function Team() {
  return (
    <Container style={{textAlign: 'center'}}>
        <Title text={"Nuestro Equipo"}/>
        <Row className="justify-content-center row-team">
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <img className="img-fluid" src={Profile} alt="Profile"/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <img className="img-fluid" src={Profile1} alt="Profile 1"/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <img className="img-fluid" src={Profile2} alt="Profile 2"/>
            </Col>
        </Row>
        <Row className="justify-content-center row-team">
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <Link to="/team"><Button className="button-team">Ver mas</Button></Link>
            </Col>
        </Row>
    </Container>
  )
}
