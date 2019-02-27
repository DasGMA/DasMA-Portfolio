import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function About() {
    return (
        <Container style = {{paddingTop: '1rem'}}>
         <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'About me' />
            <Row>
                <Col style = {{fontSize: '1.6rem'}}>
                    As a software developer, my prior knowledge in project management makes me an asset for any product-minded team.
                    I've spent the past 9 months learning web development and computer science at Lambda School, an innovative software engineering academy.
                    I hope to use my education and experience to provide a unique perspective when designing software solutions for customers.
                    I love to learn new frameworks and languages in order to keep my skill-set sharp and to ensure the applications I'm designing are the best fit for clients.
                    Besides software development, I am Prince2 and Professional Agile & Scrum certified with over 5 years of experience as a coordinator/manager within information systems and the hospitality industry.
                    Here you can find more information on my projects.
                </Col>
            </Row>
        </Container>
    )
}

export default About;