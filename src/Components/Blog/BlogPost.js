import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
        return (
                <div>
                    <div>{props.category}</div>
                    <Link  to = {`/blog/post/${props.id}`}><div>{props.title}</div></Link>
                    <div className= 'truncate'>{props.content}</div>
                </div>
         );
}
export default BlogPost;