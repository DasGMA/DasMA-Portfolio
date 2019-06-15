import React, {Component} from 'react';
import axios from 'axios';

const URL = 'http://ma:9000/posts/add/';

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
            window.location = '/blog';
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
                <div>
                <h1>Add New Blog Post</h1>
                    <div>
                            <div>Category</div>
                                <div>
                                    <input type="text" name="category" placeholder="Post category" value={category} onChange={(event) => this.change(event)} />
                                </div>
                    </div>
                    <div >
                        <div>Title</div>
                            <div>
                                <input type="text" name="title" placeholder="Post title" value={title} onChange={(event) => this.change(event)} />
                            </div>
                    </div>
                    <div>
                        <div>Content</div>
                            <div>
                                <input type="textarea" name="content"  placeholder="Post content" value={content}  onChange={(event) => this.change(event)} />
                            </div>
                    </div>
                    <div className = 'button' type='submit' onClick={this.addPost}>Save</div>
                </div>
         );
    }
}


 
export default NewBlogPost;