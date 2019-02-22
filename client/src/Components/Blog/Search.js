import React from 'react';
import { Input } from 'react-materialize';

const Search = (props) => {
    return (
            <Input
                label = 'Search blog posts'
                type = 'text'
                value = {props.search}
                onChange = {props.handleSearch}
            />
    )
}

export default Search;