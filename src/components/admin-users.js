import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button,Table } from 'react-bootstrap';
import '../css/admin-users.css';

class AdminUsers extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { username: '', password: '', error: ''};
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

    submitCreate = () => {
        console.log(this.state)
        if (this.state.username == 'admin' && this.state.password == '123456') {
            this.setState({error: 'Username or password already exists'});
        }
    }

    render(){
        return (
            <>
                <Link to="/admin" >⬅ Back</Link>
                <div className="contentForm">
                    <h1 className="title">Admin Users Page - Users</h1>
                    <div className="createContent">
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

                            <Button variant="primary" onClick={this.submitCreate}>
                                Create
                            </Button>
                        </Form>
                    </div>
                    {/* formulaire de création + popup disant que ça a bien été créé */}
                    
                </div>
                <div className="contentTable">
                    <Table striped bordered hover variant="blue">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Lou</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

export default AdminUsers