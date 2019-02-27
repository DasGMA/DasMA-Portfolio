import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'react-materialize';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {
                username: '',
                password: ''
            }
         }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.replace('/blog')
        }
    }

    changeHandler = (event) => {
        this.setState({ user: {
            ...this.state.user,
            [event.target.name]: event.target.value 
        }});
    }

    submitHandler = async (event, user) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://dasma-blog.herokuapp.com/users/admin_login', user);
            const token = response.data;
            localStorage.setItem('token', token);
            this.props.history.push('/blog');
        } catch (error) {
            console.log(error, 'Something went wrong.')
        }
    }


    render() { 
        return ( 
            <div>
                <div className="row" onSubmit={(event) => this.submitHandler(event, this.state.user)}>
                    <div className="input-field col s12">
                        <input placeholder="Username" id="username" type="text" value={this.state.username} onChange={this.changeHandler}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder = 'Password' id="password" type="text" value={this.state.password} onChange={this.changeHandler}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <Button type="submit" onClick = {this.submitHandler}>Login</Button>
            </div>                    
         );
    }
}

export default Login;