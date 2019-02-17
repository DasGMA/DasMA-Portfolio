import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function About() {
    return (
        <Container>
         <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'About me' />
            <Row>
                <Col s={3} style = {{background: '#000'}}>
                    <p></p>
                </Col>
                <Col s={9} style = {{background: 'blue'}}>
                    Some content
                </Col>
            </Row>
        </Container>
    )
}

export default About;