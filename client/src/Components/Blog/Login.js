import React, {Component} from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';

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
            this.props.history.replace('/posts')
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
            const response = await axios.post('http://localhost:3000/login', user);
            const token = response.data;
            localStorage.setItem('token', token);
            this.props.history.push('/posts');
        } catch (error) {
            console.log(error, 'Something went wrong.')
        }
    }


    render() { 
        /* const LinkToRegister = <Link to='/register'>Register</Link> */
        return ( 
                <div className="form" onSubmit={(event) => this.submitHandler(event, this.state.user)}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        required
                        onChange={this.changeHandler}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        required
                        onChange={this.changeHandler}
                    />

                    
                        <div className = 'button' type="submit">Login</div>
                        {/* <p>Don't have an account? {LinkToRegister}</p> */}
                    
                </div>
         );
    }
}

export default Login;