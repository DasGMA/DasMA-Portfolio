import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Contacts() {
    return(
        <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Contacts' />
            <Row className = 'center' style = {{color: '#fff'}}><h2>Contact me</h2></Row>
            <Row>
                <Col s = {4} m = {4} l = {4} className = 'center'><i className="fas fa-phone-square fa-5x"></i></Col>
                <Col s = {4} m = {4} l = {4} className = 'center'><i className="fas fa-envelope fa-5x"></i></Col>
                <Col s = {4} m = {4} l = {4} className = 'center'><i className="fab fa-twitter-square fa-5x"></i></Col>
            </Row>
            
        </Container>
    )
}

export default Contacts;
