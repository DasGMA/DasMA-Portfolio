import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
    
        return (
                <div>
                    <div>{props.category}</div>
                    <Link  to={`/blogPost/${props.id}`}><div>{props.title}</div></Link>
                    <div>{props.content}</div>
                </div>
         );
    
}
 
export default BlogPost;