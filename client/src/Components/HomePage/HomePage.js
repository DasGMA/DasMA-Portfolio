import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import dell from '../../Media/Dell.png';

const Text = <Col s = {12} className = 'board'><div className = 'content'><p>Long long time ago..........sdfasfgasfgfagdfgdfg. Long long time ago..........sdfasfgasfgfagdfgdfg. Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfg</p><p>Long long time ago..........sdfasfgasfgfagdfgdfgEND</p></div></Col>
let timeout;
class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            play: true,
        }
    }
    
    componentWillUnmount() {
        window.clearTimeout(timeout);
    }

    click = () => {
        timeout = setTimeout(this.stop, 20000);
        this.setState(prevState => ({
            show: !prevState.show,
            play: !prevState.play
        }));
    }

    stop = () => {
        this.setState({
            show: true,
            play: true
        });

        window.location = '/about';
    }
 
    render() {
        const { show, play } = this.state;
        return (
            <Container className = 'home-page center-align'>
            <img src = {dell} className = 'bg' alt = 'Home page' />
               
               <Row className = 'blue-grey-text text-lighten-5 valign-wrapper'>
                 { play ? <Col s = {12} >
                            <h1>Hi. I'm Das.</h1>
                            <h2>Software developer from California.</h2>
                          </Col>
                        : Text }
                </Row>
                
                <Row className = 'blue-grey-text text-lighten-5'>
                    <Col s = {12} className = 'column'>
                    <button onClick = {this.click}>{show ? <i className = 'far fa-play-circle fa-5x meetme-icon'></i> : null}</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage;