import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

function About() {
    return (
        <Container style = {{paddingTop: '1rem'}}>
         <Row className = 'center' style = {{color: '#fff'}}><h3>About Me</h3></Row>
            <Row>
                <Col m = {1}></Col>
                <Col m = {10} s = {12} style = {{fontSize: '1.6rem', color: '#fff'}}>
                    <p>Recent graduate from Lambda School – awesome Software Engineering Academy.</p>
                    <p>I have over 1 year of experience as a software developer with prior experience in Project Management. While I am proficient full – stack engineer, my emphasis is in building front end services.</p>
                    <p>I love building things. While hard engineering problems are often fun to tackle, I am most attracted to solving real customer problems with a business justification. I am looking for a junior software developer role where I can collaborate with a team, gain experience with architecture, apply my knowledge, and grow with the company.</p>
                    
                    <p>Here you can find more information on my <Link to = '/projects'>projects</Link>.</p>
                </Col>
                <Col m = {1}></Col>
            </Row>
        </Container>
    )
}

export default About;