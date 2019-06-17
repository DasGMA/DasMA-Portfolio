import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

function Foot() {
    return(
            <footer className = 'page-footer black z-depth-0 blue-grey-text text-lighten-5'>
                <Container>
                    <Row style = {{marginBottom: '1rem'}}>
                        <Col s={6}>
                            <span className = 'copyright'>©Copyright DM</span>
                        </Col>
                        <Col s={6} className = 'icons'>
                            <a href = 'https://www.linkedin.com/in/dasma/'><i className="fab fa-linkedin-in fa-lg social-icons"></i></a>
                            <a href = 'https://github.com/DasGMA'><i className="fab fa-github-alt fa-lg social-icons"></i></a>
                            <a href = 'https://twitter.com/Das_G_MA'><i className="fab fa-twitter fa-lg social-icons"></i></a>
                           <Link to = '/blog'><i className = 'fas fa-blog fa-lg social-icons'></i></Link>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}

export default Foot;