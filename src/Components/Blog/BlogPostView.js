import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'react-materialize';
import axios from 'axios';
/*import { MarkdownPreview } from 'react-marked-markdown'; */

const URL = 'http://ma:9000/posts/';

class BlogPostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            category: '',    
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
                })
            })
            .catch(err => {
                console.log(err);
            });


    }

    render() {
        return ( 
                <Row>
                    {localStorage.getItem('token') ? <div>
                        <div className = 'button'><Link to={`edit-post/${this.state.id}`}> Edit </Link></div>
                        <div className = "button" onClick={() => this.props.delete(this.state.id)} title={this.state.title}>Delete</div>
                    </div> : null}
                    <h1>{this.state.title}</h1>
                    <p>{this.state.content}</p>
                {/*  <MarkdownPreview className='mark' value={this.state.content} /> */}
                    <button onClick = {this.props.back}>Back</button>
                </Row>
         );
    }
}
 
export default withRouter(BlogPostView);