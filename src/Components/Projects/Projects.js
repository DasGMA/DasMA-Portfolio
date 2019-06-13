import React, { Component } from 'react';
import { Container, Row } from 'react-materialize';
import Project from './Project';
import gol from '../../Media/gameoflife.png';
import mud from '../../Media/mud.jpg';
import ontherecord from '../../Media/ontherecord.png';
import spaceShooter from '../../Media/spaceShooter.jpg';
import {
    mySiteDescription,
    spaceShooterDescription,
    ontherecordDescription,
    golDescription,
    mudDescription
} from './descriptions';

class Projects extends Component {
    state = {
        projects: [
            {
                'title': 'My Personal Site',
                'link': '',
                'description': mySiteDescription,
                'image': ''
            },
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
                <Row className = 'center' style = {{color: '#fff'}}><h1>Projects</h1></Row>
                <div className = 'divider'></div>
                {this.state.projects.map(project => (
                        <Project 
                            key = {project.link + project.title}
                            title = {project.title}
                            description = {project.description}
                            image = {project.image}
                            link = {project.link}
                        />
                ))}
            </Container>
        )
    }
}

export default Projects;