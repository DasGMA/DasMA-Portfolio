import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = (props, match) => {
        return (
                <div>
                    <div>{props.category}</div>
                    <Link  to={`${match.url}/blogPost/${props.id}`}><div>{props.title}</div></Link>
                    <div>{props.content}</div>
                </div>
         );
}
export default BlogPost;