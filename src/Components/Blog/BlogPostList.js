import React from 'react';
import { Col, Row } from 'react-materialize';
import BlogPost from './BlogPost';
import Categories from './Categories';
import Search from './Search';

function BlogPostList(props) {
    return (
        <Row>
            <Search handleSearch = {props.handleSearch} search = {props.search}/>
            <Categories />
            <Col s={12} m={9} style = {{color: '#fff', border: '1px solid yellow'}}>
                {props.posts.map(post => (
                    <BlogPost
                        key = {post.id}
                        id = {post.id}
                        title = {post.title}
                        content = {post.content}
                        category = {post.category}
                    /> 
                ))}
            </Col>
        </Row>
    )
}

export default BlogPostList;