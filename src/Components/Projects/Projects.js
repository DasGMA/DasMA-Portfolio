import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import Project from './Project';
import gol from '../../Media/gameoflife.png';
import mud from '../../Media/mud.jpg';
import ontherecord from '../../Media/ontherecord.png';
import spaceShooter from '../../Media/spaceShooter.jpg';
import {
    spaceShooterDescription,
    ontherecordDescription,
    golDescription,
    mudDescription
} from './descriptions';

class Projects extends Component {
    state = {
        projects: [
            // {
            //     'title': 'My Personal Site',
            //     'link': '',
            //     'description': mySiteDescription,
            //     'image': ''
            // },
            {
                'title': 'Space Game',
                'link': 'https://guardians-of-the-galaxy-crazy-ugly-space-game.netlify.com/',
                'description': spaceShooterDescription,
                'image': spaceShooter
            },
            {
                'title': 'On The Record',
                'link': 'https://ontherecord.us',
                'description': ontherecordDescription,
                'image': ontherecord

            },
            {
                'title': 'Conways Life',
                'link': 'https://dasmagameoflife.herokuapp.com/',
                'description': golDescription,
                'image': gol
            },
            {
                'title': 'MUD Game',
                'link': 'https://dasma-mud.netlify.com/',
                'description': mudDescription,
                'image': mud
            }
        ]
    }
    render() {
        return (
            <Container>
                <Row style = {{color: '#fff'}}>
                    <Col m = {1} s = {12}></Col>
                    <Col m = {10} s = {12} className = 'center'><h3>Projects</h3></Col>
                    <Col m = {1} s = {12}></Col>
                </Row>
                {this.state.projects.map(project => (
                        <Project 
                            key = {project.link + project.title}
                            title = {project.title}
                            description = {project.description}
                            image = {project.image}
                        />
                ))}
            </Container>
        )
    }
}

export default Projects;