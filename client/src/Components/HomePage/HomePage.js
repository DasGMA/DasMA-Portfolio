import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import dell from '../../Media/Dell.png';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

class HomePage extends Component { 
    render() {
        return (
            <Container className = 'home-page'>
            <img src = {dell} className = 'bg' alt = 'Home page' />
               
               <Row className = 'blue-grey-text text-lighten-5'>
                   <Col m = {1}></Col>
                    <Col m = {10} s = {12} >
                        <h1>Hi. I'm Das.</h1>
                        <h4>Software developer from California.</h4>
                    </Col>
                    <Col m = {1}></Col>
                </Row>
                
                <About />
                <Contacts />
                 
            </Container>
        )
    }
}

export default HomePage;