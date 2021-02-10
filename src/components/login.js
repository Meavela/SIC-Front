import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/login.css';
import  { Redirect, useHistory } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', error: '' };
    }

    

    changeUsername = (event) => {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    changePassword = (event) => {
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    submitLogin = (event) => {
        console.log(this.state)
        if (this.state.username == 'admin' && this.state.password == '123456') {
            console.log("redirect")
            this.setState({error: ''});
        }else {
            this.setState({error: 'Username or password are not correct, please try again'});
        }
    }


    render() {
        return (
            <div className="loginContent">
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username :</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={this.changeUsername}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onChange={this.changePassword}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label className="errorContent">{this.state.error}</Form.Label>
                    </Form.Group>

                    <Button variant="primary" onClick={this.submitLogin}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login