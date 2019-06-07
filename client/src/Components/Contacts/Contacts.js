import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import Phone from './Phone';
import Email from './Email';
import Twitter from './Twitter';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            show: [true, true, true]
        }
    }

    click = (id) => {
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[id] = !prevState.show[id];
            return {
                show: newItems
            }
        });
    }

    render() {
        return(
            <Container>
                <Row className = 'center' style = {{color: '#fff'}}><h2>Contact me</h2></Row>
                <Row>
                    <Col s = {12} m = {4} l = {4} className = 'center' onClick = {() => this.click(0)}>{this.state.show[0] ? <div className = 'contact'><i className="fas fa-phone-square fa-5x"></i></div> : <Phone />}</Col>
                    <Col s = {12} m = {4} l = {4} className = 'center' onClick = {() => this.click(1)}>{this.state.show[1] ? <div className = 'contact black'><i className="fas fa-envelope fa-5x" style={{color: 'white'}}></i></div> : <Email/>}</Col>
                    <Col s = {12} m = {4} l = {4} className = 'center' onClick = {() => this.click(2)}>{this.state.show[2] ? <div className = 'contact'><i className="fab fa-twitter-square fa-5x"></i></div> : <Twitter/>}</Col>
                </Row>
            </Container>
        )
    }
}

export default Contacts;
