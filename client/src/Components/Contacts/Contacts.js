import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import Phone from './Phone';
import Email from './Email';

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
            show: true
        }
    }

    click = (id) => {
        this.setState({
            show: !this.state
        });
    }

    render(){
        return(
            <Container>
                <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Contacts' />
                <Row className = 'center' style = {{color: '#fff'}}><h2>Contact me</h2></Row>
                <Row>
                    <Col s = {12} m = {4} l = {4} className = 'center' onClick = {this.click} id = '1'>{this.state.show ? <div className = 'contact'><i className="fas fa-phone-square fa-5x"></i></div> : <Phone />}</Col>
                    <Col s = {12} m = {4} l = {4} className = 'center' onClick = {this.click} id = '2'>{this.state.show ? <div className = 'contact black'><i className="fas fa-envelope fa-5x" style={{color: 'white'}}></i></div> : <Email/>}</Col>
                    <Col s = {12} m = {4} l = {4} className = 'center' onClick = {this.click} id = '3'><div className = 'contact' onClick = {()=> console.log('clicked')}><i className="fab fa-twitter-square fa-5x"></i></div></Col>
                </Row>
            </Container>
        )
    }
}

export default Contacts;
