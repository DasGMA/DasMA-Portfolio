import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* import DeleteModal from './DeleteModal';
import { MarkdownPreview } from 'react-marked-markdown'; */

const URL = 'https://dasma-blog.herokuapp.com/posts';

class BlogPostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            category: '',
            created_at: '',
            postedBy: ''        
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
                    id: matching.id,
                    category: matching.category,
                    created_at: matching.created_at,
                    postedBy: matching.postedBy
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
                <div>
                    <div>
                        <div className = 'button'><Link to={`/edit-post/${this.state.id}`}> Edit </Link></div>
                        <Modal delete={() => this.delete(this.state.id)} title={this.state.title}/>
                    </div>
                    <h1>{this.state.title}</h1>
                {/*  <MarkdownPreview className='mark' value={this.state.content} /> */}
                    <div className = 'button'><Link to={`/blogPosts`}>Back to Blog Posts</Link></div>
                </div>
         );
    }
}
 
export default BlogPostView;