import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* import DeleteModal from './DeleteModal';
import { MarkdownPreview } from 'react-marked-markdown'; */

const URL = 'https://das-ma.herokuapp.com/notes/';

class BlogPostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: ''         
         }
    }

    componentDidMount() {
        
        let id = Number(this.props.match.params.id);
        axios.get(URL)
            .then(response => {
                let matching = response.data.find(blogPost => blogPost.id === id);
                this.setState({
                    title: matching.title,
                    content: matching.content,
                    id: matching.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    delete = (id) => {
        axios.delete(`${URL}${id}`)
        .then(response => {
            this.setState({
                posts: response.data
            })
            window.location = '/posts';
        })
        .catch(error => {
          console.log(error);
        })
      }

    render() {
        
        return ( 
            
            <Container>
                <div>
                    <div>
                        <Button><Link to={`/edit-post/${this.state.id}`}> Edit </Link></Button>
                        <Modal delete={() => this.delete(this.state.id)} title={this.state.title}/>
                    </div>
                    <h1>{this.state.title}</h1>
                {/*  <MarkdownPreview className='mark' value={this.state.content} /> */}
                    <Button><Link to={`/blogPosts`}>Back to Blog Posts</Link></Button>
                </div>
            </Container>
            
         );
    }
}
 
export default BlogPostView;