import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-materialize';
import Search from './Search';
import BlogPost from './BlogPost';
import BlogPostView from './BlogPostView';
import NewBlogPost from './NewBlogPost';
import Admin from './Admin';
import decode from 'jwt-decode';

const URL = 'http://ma:9000/posts';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            search: '',
            searchPosts: [],
            show: false,
            adminLogin: false,
            adminLoggedIn: false
        }
    }

    componentDidMount () {
        this.getPosts();
        this.loggedIn();
    }

    getPosts = () => {
        axios.get(URL)
        .then(response => {
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

    newPost = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    admin = () => {
        this.setState(prevState => ({
            adminLogin: !prevState.adminLogin
        }));
    }

    getToken = () => {
        return localStorage.getItem('token');
    }

    logout = () => {
        localStorage.removeItem('token');
        this.setState({
            adminLoggedIn: false
        })
    }

    loggedIn = () => {
        const token = this.getToken();
        if (!!token && !this.isTokenExpired(token)) {
            this.setState(prevState => ({
                adminLoggedIn: !prevState.adminLoggedIn
            }));
        }
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 10000) {
                return true;
            } else {
                return false;
            }
        }
        catch (error) {
            return false;
        }
    }
    

    render() {
        const { posts, search } = this.state;
        const layout =  <Row>
                            <Search handleSearch = {this.handleSearch} search = {search}/>
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
                            <Route path = {`${this.props.match.path}/:id`} component = { BlogPostView } />
                            </Col>
                        </Row>

        return (
            <Container>
                {this.state.adminLoggedIn ? <button onClick = {this.newPost}>New Post</button> : null }
                { this.state.adminLoggedIn ? <button onClick = {this.logout}>Logout</button> : <button onClick = {this.admin}>Admin Login</button> }
                
                {this.state.show ? <NewBlogPost /> : layout}
                {this.state.adminLogin ? <Admin /> : null}
            </Container>
        )
    }
}

export default Blog;