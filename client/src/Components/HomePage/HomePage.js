import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import dell from '../../Media/Dell.png';

function HomePage() {
    return (
        <Container className = 'home-page center-align'>
        <img src={dell} className = 'bg' alt = 'Home page' />
            <Row className = 'blue-grey-text text-lighten-5 valign-wrapper'>
                <Col s={12}>
                    <h1>Hi. I'm Das.</h1>
                    <h2>Software developer from California.</h2>
                </Col>
            </Row>
            <Row className = 'blue-grey-text text-lighten-5'>
                <Col s={12} className = 'column'>
                    <button ><i className="far fa-play-circle fa-5x meetme-icon"></i></button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;