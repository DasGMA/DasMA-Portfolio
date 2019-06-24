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
            id: 0,
            title: '',
            content: '' 
         }
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        console.log(id, 'id')
        axios.get(URL)
            .then(response => {

                const matching = response.data.find(post => post.id === id);

                this.setState({
                    id: matching.id,
                    title: matching.title,
                    content: matching.content,
                });
            })
            .catch(err => {
                console.log(err);
            });
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
        console.log(this.state)
        return ( 
                <Row>
                    {localStorage.getItem('token') ? <Link to={`edit-post/${this.state.id}`}> Edit </Link> : null}
                    <h1>{this.state.title}</h1>
                    <p>{this.state.content}</p>
                {/*  <MarkdownPreview className='mark' value={this.state.content} /> */}
                    <button onClick = {this.props.back}>Back</button>
                </Row>
         );
    }
}
 
export default withRouter(BlogPostView);