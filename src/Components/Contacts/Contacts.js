import React, { useState } from 'react';
import { Row, Col } from 'react-materialize';
import Phone from './Phone';
import Email from './Email';

export default function Contacts() {
    const [phone, togglePhone] = useState(true);
    const [email, toggleEmail] = useState(true);

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
                <Col s = {12} m = {5} className = 'center' onClick = {() => togglePhone(show => !phone)}>
                    {phone ? 
                        <div className = 'contact'>
                            <i className = {phone ? 'fas fa-phone-square fa-3x fadeIn' : 'fas fa-phone-square fa-3x'}></i>
                        </div> : <Phone />}
                </Col>
                <Col s = {12} m = {5} className = 'center' onClick = {() => toggleEmail(!email)}>
                    {email ? 
                        <div className = 'contact black'>
                            <i className = {email ? 'fas fa-envelope fa-3x fadeIn' : 'fas fa-envelope fa-3x'} style = {{ color: 'white' }}></i>
                        </div> : <Email/>}
                </Col>
                <Col m = {1}></Col>
            </Row>
        </>
    )
}

