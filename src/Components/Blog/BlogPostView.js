import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* import DeleteModal from './DeleteModal';
import { MarkdownPreview } from 'react-marked-markdown'; */

const URL = 'http://ma:9000/posts/';

class BlogPostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            category: '',
            postedBy: ''        
         }
    }

    componentDidMount() {
        let id = Number(this.props.match.params.id);
        axios.get(URL)
            .then(response => {
                console.log(response.data)
                let matching = response.data.find(post => post.id === id);
                this.setState({
                    title: matching.title,
                    content: matching.content,
                    id: matching.id,
                    category: matching.category,
                    postedBy: matching.postedBy
                })
            })
            .catch(err => {
                console.log(err);
            })
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

    render() {
        
        return ( 
                <div>
                    <div>
                        <div className = 'button'><Link to={`edit-post/${this.state.id}`}> Edit </Link></div>
                        <div className = "button" onClick={() => this.delete(this.state.id)} title={this.state.title}>Delete</div>
                    </div>
                    <h1>{this.state.title}</h1>
                {/*  <MarkdownPreview className='mark' value={this.state.content} /> */}
                    <div className = 'button'><Link to={`/blog`}>Back</Link></div>
                </div>
         );
    }
}
 
export default BlogPostView;