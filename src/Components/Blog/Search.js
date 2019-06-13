import React from 'react';

const Search = (props) => {
    return (
            <div className = 'input-field col s12'>
                <input
                    id = 'search'
                    type = 'text'
                    value = {props.search}
                    onChange = {props.handleSearch}
                />
                <label for = 'search'>Search blog posts</label>
            </div>
    )
}

export default Search;