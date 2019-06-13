import React, {Component} from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Col, Input, Button, Container } from 'react-materialize';


const URL = 'https://dasma-blog.herokuapp.com/posts/';


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
            let matching = response.data.find(post => post.id === id);
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

    render() { 
        
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail" sm={2}>Category</Label>
                            <Col sm={12}>
                                <Input type="text" name="category" placeholder="Post category" value={this.state.category} onChange={this.change} />
                            </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" sm={2}>Title</Label>
                            <Col sm={12}>
                                <Input type="text" name="title" placeholder="Post title" value={this.state.title} onChange={this.change} />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2} >Content</Label>
                            <Col sm={12}>
                                <Input type="textarea" name="content"  placeholder="Post content" value={this.state.content} onChange={this.change} />
                            </Col>
                    </FormGroup>
                    <Button type='submit' onClick={this.update}>Update</Button>
                </Form>
            </Container>
         );
    }
}
 
export default EditBlogPost;