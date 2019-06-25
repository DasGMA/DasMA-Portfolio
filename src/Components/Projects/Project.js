import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';

function Project(props) {
    return(
        <Row>
            <Col m = {1} s = {12}></Col>
            <Col  m={10} s={12} style = {{paddingTop: '1rem'}}>
                <h5 style = {{color: '#fff'}}>{props.title}</h5>
                <Card header = {<CardTitle image = {props.image}/>}>
                    <>{props.description}</>
                </Card>
            </Col>
            <Col m = {1} s = {12}></Col>
        </Row>

    )
}

export default Project;