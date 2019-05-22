import React from 'react';
import { Container, Row } from 'react-materialize';

function Contacts() {
    return(
        <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Contacts' />
            <Row className = 'center' style = {{color: '#fff'}}><h1>Contact me</h1></Row>
            
        </Container>
    )
}

export default Contacts;
