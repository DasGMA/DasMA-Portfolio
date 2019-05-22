import React, { Component } from 'react';
import { Container, Row } from 'react-materialize';
import Project from './Project';
import gol from '../../Media/gameoflife.png';
import mud from '../../Media/mud.jpg';
import ontherecord from '../../Media/ontherecord.png';


const ontherecordDescription = <div><p>Music Reviews Project On The Record - Jan 2019 <br/> Lambda School 5 Week project working in a team of 4. Created fully functional Music Reviews Website. <br/> <b>React | Node.js | JavaScript | SQLite3 | PG | Bootstrap | Spotify API | Firebase API | Stripe API</b></p><p><a href = 'https://github.com/Lambda-School-Labs/labs9-music-reviews/tree/development' target = '_blank' rel = 'noopener noreferrer'>Git Repository</a></p><p><a href = 'https://ontherecord.us' target = '_blank' rel = 'noopener noreferrer'>Website</a></p></div>
const mudDescription = <div><p>Multi - User Dungeon (MUD) Game - 2018 <br/> <b>React | JavaScript | Django | Python</b></p><p><a href = 'https://github.com/DasGMA/LambdaMUD-Project' target = '_blank' rel = 'noopener noreferrer'>Git Back-end Repository</a></p><p><a href = 'https://github.com/DasGMA/LambdaMUD-Client' target = '_blank' rel = 'noopener noreferrer'>Git Front-end Repository</a></p><p><a href = 'https://dasma-mud.netlify.com/' target = '_blank' rel = 'noopener noreferrer'>Netlify</a></p></div>
const golDescription = <div><p>Game Of Life - Dec 2018 <br/> Cellular Automata and Conway's Game of Life App <br/> <b>React | JavaScript | HTML5 | CSS3</b></p><p><a href = 'https://github.com/DasGMA/Conways-Life' target = '_blank' rel = 'noopener noreferrer'>Git Repository</a></p><p><a href = 'https://dasmagameoflife.herokuapp.com/' target = '_blank' rel = 'noopener noreferrer'>Heroku</a></p></div>

class Projects extends Component {
    state = {
        projects: [
            {
                'title': 'On The Record',
                'link': 'https://ontherecord.us',
                'description': ontherecordDescription,
                'image': ontherecord

            },
            {
                'title': 'MUD Game',
                'link': 'https://dasma-mud.netlify.com/',
                'description': mudDescription,
                'image': mud
            },
            {
                'title': 'Conways Life',
                'link': 'https://dasmagameoflife.herokuapp.com/',
                'description': golDescription,
                'image': gol
            }
        ]
    }
    render() {
        return (
            <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Projects' />
                <Row className = 'center' style = {{color: '#fff'}}><h1>Projects</h1></Row>
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