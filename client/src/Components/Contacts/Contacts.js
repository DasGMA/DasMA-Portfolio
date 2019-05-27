import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Contacts() {
    return(
        <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Contacts' />
            <Row className = 'center' style = {{color: '#fff'}}><h2>Contact me</h2></Row>
            <Row>
                <Col s = {12} m = {4} l = {4} className = 'center'><div className = 'contact'><i className="fas fa-phone-square fa-5x"></i></div></Col>
                <Col s = {12} m = {4} l = {4} className = 'center'><div className = 'contact black'><i className="fas fa-envelope fa-5x" style={{color: 'white'}}></i></div></Col>
                <Col s = {12} m = {4} l = {4} className = 'center'><div className = 'contact'><i className="fab fa-twitter-square fa-5x"></i></div></Col>
            </Row>
            
        </Container>
    )
}

export default Contacts;
