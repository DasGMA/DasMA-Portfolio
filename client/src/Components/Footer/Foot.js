import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Foot() {
    return(
            <footer className = 'page-footer'>
                <Container>
                    <Row>
                        <Col s={6}>
                            <p>© 2019 Copyright Das MA</p>
                        </Col>
                        <Col s={2}>
                            <p>LinkedIn</p>
                        </Col>
                        <Col s={2}>
                            <p>Github</p>
                        </Col>
                        <Col s={2}>
                            <p>Twitter</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}

export default Foot;