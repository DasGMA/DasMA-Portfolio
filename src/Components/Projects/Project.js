import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

function Project(props) {
    return(
        <>
        <Col  m={6} s={12} style = {{paddingTop: '1rem'}}>
            <h5 style = {{color: '#fff'}}>{props.title}</h5>
            <Card header = {<CardTitle image = {props.image}/>}>
                <p>{props.description}</p>
            </Card>
        </Col>
        <div className = 'divider'></div>
        </>

    )
}

export default Project;