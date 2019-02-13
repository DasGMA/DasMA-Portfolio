import React from 'react';
import { Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar right className = 'grey'>
            <li><NavLink to = '/about'>About</NavLink></li>
            <li><NavLink to = '/resume'>Resume</NavLink></li>
            <li><NavLink to = '/projects'>Projects</NavLink></li>
            <li><NavLink to = '/blog'>Blog</NavLink></li>
        </Navbar>
    )
}

export default Navigation;