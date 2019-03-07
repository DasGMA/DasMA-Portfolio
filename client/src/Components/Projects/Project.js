import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

function Project(props) {
    return(
        <Row>
            <Col l={1}></Col>
            <Col l={10} s={12} m={12}>
                <Card 
                    header = {<CardTitle reveal image = {props.image} waves = 'light' />}
                    title = {props.title}
                    reveal = {props.description}>
                    <p>Link to working app: <Link to = {props.link}>Game Of Life</Link></p>
                </Card>
            </Col>
            <Col l={1}></Col>
        </Row>

    )
}

export default Project;