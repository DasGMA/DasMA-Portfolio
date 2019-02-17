import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function About() {
    return (
        <Container>
         <img src={require ('../../Media/Screen.png')} className = 'bg' alt = 'About' />
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