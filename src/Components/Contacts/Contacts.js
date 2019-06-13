import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Phone from './Phone';
import Email from './Email';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            show: [true, true]
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
            <>
                <Row style = {{color: '#fff'}}>
                    <Col m = {1}></Col>
                    <Col s = {12} m = {10}>
                        <h5>Contact me</h5>
                    </Col>
                    <Col m = {1}></Col>
                </Row>
                <Row>
                    <Col m = {1}></Col>
                    <Col s = {12} m = {5} className = 'center' onClick = {() => this.click(0)}>
                        {this.state.show[0] ? <div className = 'contact'><i className = {this.state.show[0] ? 'fas fa-phone-square fa-3x fadeIn' : 'fas fa-phone-square fa-3x'}></i></div> : <Phone />}
                    </Col>
                    <Col s = {12} m = {5} className = 'center' onClick = {() => this.click(1)}>
                        {this.state.show[1] ? <div className = 'contact black'><i className = {this.state.show[1] ? 'fas fa-envelope fa-3x fadeIn' : 'fas fa-envelope fa-3x'} style = {{ color: 'white' }}></i></div> : <Email/>}
                    </Col>
                    <Col m = {1}></Col>
                </Row>
            </>
        )
    }
}

export default Contacts;
