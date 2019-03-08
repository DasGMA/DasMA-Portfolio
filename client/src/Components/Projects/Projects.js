import React, { Component } from 'react';
import { Container, Row } from 'react-materialize';
import Project from './Project';
import gol from '../../Media/gameoflife.png';
import mud from '../../Media/mud.jpg';

class Projects extends Component {
    state = {
        projects: [
            {
                'title': 'On The Record',
                'link': 'http://www.ontherecord.us',
                'description': '',
                'image': ''

            },
            {
                'title': 'MUD Game',
                'link': 'https://zen-brattain-ef374b.netlify.com/',
                'description': '',
                'image': mud
            },
            {
                'title': 'Conways Life',
                'link': 'https://dasmagameoflife.herokuapp.com/',
                'description': '',
                'image': gol
            }
        ]
    }
    render() {
        return (
            <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Projects' />
                <Row style = {{color: '#fff'}}><h1>Projects</h1></Row>
                {this.state.projects.map(project => (
                        <Project 
                            key = {project.id}
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