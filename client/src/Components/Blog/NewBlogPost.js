import React, {Component} from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Col, Input, Button } from 'react-materialze';


const URL = 'https://das-ma.herokuapp.com/posts/add/';

class NewBlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            category: ''
         }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    addPost = event => {
        event.preventDefault();
        const newPost = {
          title: this.state.title,
          content: this.state.content,
          category: this.state.category
        }
        axios.post(URL, newPost) 
          .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/posts';
          })
          .catch(error => {
            console.log(error);
          })
          this.setState({
            title: '',
            content: '',
            category: ''
          });
    }
    render() { 

        const {title, content, category} = this.state;
       
        return ( 
                <Form>
                <h1>Add new note</h1>
                    <FormGroup row >
                            <Label for="category" sm={2} size="lg">Category</Label>
                                <Col sm={12}>
                                    <Input type="text" name="category" placeholder="Post category" value={category} onChange={(event) => this.change(event)} />
                                </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label for="title" sm={2} size="lg">Title</Label>
                            <Col sm={12}>
                                <Input type="text" name="title" placeholder="Post title" value={title} onChange={(event) => this.change(event)} />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="content" sm={2} size="lg">Content</Label>
                            <Col sm={12}>
                                <Input type="textarea" name="content"  placeholder="Post content" value={content}  onChange={(event) => this.change(event)} />
                            </Col>
                    </FormGroup>
                    <Button type='submit' onClick={this.addPost}>Save</Button>
                </Form>
         );
    }
}


 
export default NewBlogPost;