import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

function Project(props) {
    return(
        <>
        <Col style = {{paddingTop: '1rem'}}>
            <h5 style = {{color: '#fff'}}>{props.title}</h5>
            <Card 
                header = {<CardTitle reveal image = {props.image} waves = 'light' />}
                title = {props.title}
                reveal = {props.description}>
                <p>Link to app: <a href = {props.link} target = '_blank' rel = 'noopener noreferrer'>{props.title}</a></p>
            </Card>
        </Col>
        <div className = 'divider'></div>
        </>

    )
}

export default Project;