import React from 'react';
import { Container } from 'react-materialize';
import { NavLink } from 'react-router-dom';

function Navigation() {
    
    return (
        <header>
            <Container style = {{borderBottom: '1px solid grey'}}>
                <nav className = 'transparent z-depth-0'>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">DM</a>
                    <ul className="right">
                        <li><NavLink className = 'navi' to = '/resume'>Resume</NavLink></li>
                        <li><NavLink className = 'navi' to = '/projects'>Projects</NavLink></li>
                        <li><NavLink className = 'navi' to = '/blog'>Blog</NavLink></li>
                    </ul>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navigation;