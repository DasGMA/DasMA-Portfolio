import React from 'react';
import { Navbar, Container } from 'react-materialize';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <Container style = {{borderBottom: '1px solid grey'}}>
                <Navbar right brand = 'DM' className = 'transparent z-depth-0'>
                    <li><NavLink className = 'navi' to = '/about'>About</NavLink></li>
                    <li><NavLink className = 'navi' to = '/resume'>Resume</NavLink></li>
                    <li><NavLink className = 'navi' to = '/projects'>Projects</NavLink></li>
                    <li><NavLink className = 'navi' to = '/contact'>Contact me</NavLink></li>
                    {/* <li><NavLink className = 'navi' to = '/blog'>Blog</NavLink></li> */}
                </Navbar>
            </Container>
        </header>
    )
}

export default Navigation;