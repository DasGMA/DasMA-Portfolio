import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function About() {
    return (
        <Container style = {{paddingTop: '1rem'}}>
         <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'About me' />
            <Row>
                <Col s={6} style = {{background: '#000'}}>
                    Some content
                </Col>
                <Col s={6} style = {{background: 'blue'}}>
                    Some content
                </Col>
            </Row>
        </Container>
    )
}

export default About;