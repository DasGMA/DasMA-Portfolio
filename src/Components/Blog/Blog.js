import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Container} from 'react-materialize';
import BlogPostView from './BlogPostView';
import decode from 'jwt-decode';
import BlogPostList from './BlogPostList';
import EditBlogPost from './EditBlogPost';
import Admin from './Admin';

const URL = 'http://ma:9000/posts';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            search: '',
            searchPosts: [],
            show: false,
            adminLoggedIn: false
        }
    }

    componentDidMount() {
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

    adminLogin = () => {
        this.props.history.push(`${this.props.match.url}/admin-login`);
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

    delete = (id) => {
        axios.delete(`${URL}${id}/delete`)
        .then(response => {
            this.setState({
                posts: response.data
            })
            window.location = '/blog';
        })
        .catch(error => {
          console.log(error);
        })
      }

      back = () => {
          this.props.history.push('/blog');
      }
    

    render() {
        const { posts, search } = this.state;
        console.log(this.state.adminLogin)
        return (
            <Container>
                { this.state.adminLoggedIn ? <button onClick = {this.newPost}>New Post</button> : null }
                { this.state.adminLoggedIn ? <button onClick = {this.logout}>Logout</button> : <button onClick = {this.adminLogin}>Admin Login</button> }

                <Route exact path = {`${this.props.match.path}`} render = {(props) => (
                    <BlogPostList {...props} posts = {posts} handleSearch = {this.handleSearch} search = {search} />
                )} />
                
                <Route path = {`${this.props.match.path}/post/:id`} render = {(props) => (
                    <BlogPostView {...props} posts = {posts} delete = {this.delete} back = {this.back}/>
                )} />

                <Route path = {`${this.props.match.url}/edit-post/:id`} component = { EditBlogPost } />

                <Route path = {`${this.props.match.url}/admin-login`} component = { Admin } />

            </Container>
        )
    }
}

export default Blog;