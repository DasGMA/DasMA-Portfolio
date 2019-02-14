import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function HomePage() {
    return (
        <main>
        <Container className = 'home-page'>
        <img src={require ('../../Media/Dell.png')} className="bg" alt = 'Home page' />
            <Row className = 'blue-grey-text text-lighten-5'>
                <Col>
                    <h1>Hi. My name is Das.</h1>
                    <h2>I'm a software developer from California.</h2>
                    <h2>Welcome to my domain.</h2>
                </Col>
            </Row>
        </Container>
        </main>
    )
}

export default HomePage;