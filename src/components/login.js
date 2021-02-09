import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/login.css';


class Login extends React.Component {
    
    render() {
        return (
            <div className="loginContent">
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username :</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default Login