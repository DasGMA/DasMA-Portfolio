import React from 'react';
import { Navbar, Container } from 'react-materialize';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <Container>
                <Navbar right brand = 'DM' className = 'transparent z-depth-0'>
                    <li><NavLink className = 'navi' to = '/about'>About</NavLink></li>
                    <li><NavLink className = 'navi' to = '/resume'>Resume</NavLink></li>
                    <li><NavLink className = 'navi' to = '/projects'>Projects</NavLink></li>
                    <li><NavLink className = 'navi' to = '/blog'><i className="fas fa-blog fa-lg"></i>{' '}log</NavLink></li>
                </Navbar>
            </Container>
        </header>
    )
}

export default Navigation;