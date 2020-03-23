import React from 'react';
import { Row, Col } from 'react-materialize';

export default function About() {
    return (
            <Row className = 'blue-grey-text text-lighten-5'>
                <Col m = {1}></Col>
                <Col m = {10} s = {12} style = {{fontSize: '1.6rem', color: '#fff'}}>
                    <p>Recent graduate from Lambda School – awesome Software Engineering Academy with world class Instructors!</p>
                    <p>I have over 2 year of experience as a software developer with prior experience in Project Management. While I am proficient full – stack engineer, my emphasis is in building front end services.</p>
                    <p>I love building things. While hard engineering problems are often fun to tackle, I am most attracted to solving real customer problems with a business justification. I am looking for a software developer role where I can collaborate with a team, gain experience with architecture, apply my knowledge, and grow with the company.</p>
                    <p>In my free time, I love to get outside for mountain-biking, a good session at the gym, travel with my wife and keep building my swimming pool.</p>
                </Col>
                <Col m = {1}></Col>
            </Row>
    )
}