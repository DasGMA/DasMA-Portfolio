import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-materialize';
import Search from './Search';
import BlogPost from './BlogPost';

const URL = 'https://dasma-blog.herokuapp.com/posts';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            search: '',
            searchPosts: []
        }
    }

    componentDidMount () {
        axios.get(URL)
        .then(response => {
            console.log(response.data)
            this.setState({
                posts: response.data,
                searchPosts: response.data
            })
        })
        .catch(error => {
          console.log(error);
        });
    }

    handleSearch = (event) => {
        this.setState ({
          search: event.target.value,
          posts: this.state.searchPosts.filter((post) => 
            new RegExp(event.target.value, "i").exec(post.title))
        });
    }

    render() {
        const { posts, search } = this.state;
        const layout =  <Row>
                            <Col s={12} m={3} style = {{color: '#fff', border: '1px solid yellow'}}>
                             Categories 
                            </Col>

                            <Col s={12} m={9} style = {{color: '#fff', border: '1px solid yellow'}}>
                                {posts.map(post => {
                                    return (
                                        <BlogPost
                                            key = {post.id}
                                            id = {post.id}
                                            title = {post.title}
                                            content = {post.content}
                                            category = {post.category}
                                        />
                                    )
                                })}
                            </Col>
                        </Row>

        return (
            <Container>
            <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Blog' />
            <Row>
                <Col s={10}><Search handleSearch = {this.handleSearch} search = {search}/></Col>
                <Col s={2}><Button><Link to = '/newPost'>New Post</Link></Button></Col>
            </Row>
                { layout }
            </Container>
        )
    }
}

export default Blog;