import React, {Component} from 'react';
import axios from 'axios';
import { Container } from 'react-materialize';


const URL = 'http://ma:9000/posts/';


class EditBlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: 0,
            category: ''
         }
    }

componentDidMount () {
    const id = Number(this.props.match.params.id);
        axios.get(URL)
        .then(response => {
            const matching = response.data.find(post => post.id === id);
            this.setState({
                title: matching.title,
                content: matching.content,
                id: matching.id,
                category: matching.category
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    change = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    update = (event) => {
        event.preventDefault();
        const updatedPost = {
            title: this.state.title,
            content: this.state.content,
            category: this.state.category
        }
        axios.put(`${URL}${this.state.id}/update`, updatedPost)
        .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/blog';
        })
        .catch(error => {
            console.log(error);
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
            <Container>
                <h5>Update blog {`'${this.state.title}'`}</h5>
                    <div>
                        <div>Category</div>
                            <div>
                                <input type = "text" name = "category" placeholder = "Post category" value = {this.state.category} onChange = {this.change} />
                            </div>
                    </div>
                    <div >
                        <div>Title</div>
                            <div>
                                <input type = "text" name="title" placeholder="Post title" value={this.state.title} onChange={this.change} />
                            </div>
                    </div>
                    <div>
                        <div>Content</div>
                            <div>
                                <input type="textarea" name="content"  placeholder="Post content" value={this.state.content}  onChange={this.change} />
                            </div>
                    </div>
                    <div className = 'button' type='submit' onClick={this.update}>Update</div>
                    <div className = "link" onClick={() => this.delete(this.state.id)} >Delete</div>
            </Container>
         );
    }
}
 
export default EditBlogPost;