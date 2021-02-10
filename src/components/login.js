import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/login.css';
import  { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { username: '', password: '', error: '', redirect: false };
    }

    componentDidUpdate() {
        if(this.state.redirect) {
            this.props.setUsername(this.state.username);
        }
    }

    changeUsername = (event) => {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    changePassword = (event) => {
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    submitLogin = () => {
        console.log(this.state)
        if (this.state.username == 'admin' && this.state.password == '123456') {
            this.setState({error: '', redirect: true});
        }else {
            this.setState({error: 'Username or password are not correct, please try again', redirect: false});
        }
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }else{
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
}

export default Login