import React, { Component } from 'react';
import Axios from 'axios';

const url = 'http://ma:9000/users/admin_login';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    adminLogin = () => {
        const admin = {
            username: this.state.username,
            password: this.state.password
        };

        Axios.post(url, admin)
        .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/blog';
        })
        .catch(error => {
            console.log(error)
        });

        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return(
            <form>
                <div>
                    <input 
                        type = 'username'
                        name = 'username'
                        placeholder = 'Username'
                        value = {this.state.username}
                        onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type = 'password'
                        name = 'password'
                        placeholder = 'Password'
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <button onClick = {this.adminLogin}>Login</button>
                </div>
            </form>
        )
    }
}

export default Admin;