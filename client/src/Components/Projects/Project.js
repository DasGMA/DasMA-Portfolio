import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';

function Project(props) {
    return(
        <Row>
            <Col l={1}></Col>
            <Col l={10} s={12} m={12}>
                <h4 style = {{color: '#fff'}}>{props.title}</h4>
                <Card 
                    header = {<CardTitle reveal image = {props.image} waves = 'light' />}
                    title = {props.title}
                    reveal = {props.description}>
                    <p>Link to app: <a href = {props.link} target = '_blank' rel = 'noopener noreferrer'>{props.title}</a></p>
                </Card>
            </Col>
            <Col l={1}></Col>
        </Row>

    )
}

export default Project;