import React, { Component } from 'react';
import { Container } from 'react-materialize';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        const { posts } = this.state;
        const renderPosts = posts.length === 0 ? "There are no blog posts." : posts

        return (
            <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Blog' />
                { renderPosts }
            </Container>
        )
    }
}

export default Blog;