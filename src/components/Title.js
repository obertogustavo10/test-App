import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import '../App.css';

export default function Title({text}) {
  return (
    <Container style={{textAlign: 'center'}}>
        <Row className="justify-content-center row-team">
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <h1 className="title" >{text}</h1>
            </Col>
        </Row>
    </Container>
  )
}
