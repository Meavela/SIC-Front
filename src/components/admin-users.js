import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button,Table } from 'react-bootstrap';
import '../css/admin-users.css';
import axios from 'axios';

class AdminUsers extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { 
            listUsers: [], 
            username: '', 
            password: '', 
            error: '',
            success: ''};
    }

    componentDidUpdate() {
        if(this.state.redirect) {
            this.props.setUsername(this.state.username);
        }
    }

    componentDidMount() {
        this.getUsers().then(res => {
            this.setState({
                listUsers: res.data
            })
        })
    }

    async getUsers() {
        let users = await axios.get('http://localhost:3005/users')
        // console.log(users)
        return users;
    }

    changeUsername = (event) => {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    changePassword = (event) => {
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    async isExistUser(json){
        let login = await axios.post('http://localhost:3005/login', json)
        if (login.data.status == "OK") {
            return true;
        }
        else {
            return false;
        }
    }

    async addUser(json){
        let isCreated = await axios.post('http://localhost:3005/users/add', json)
        if (isCreated.data.status == "OK") {
            return true;
        }
        else {
            return false;
        }
    }

    submitCreate = async () => {
        console.log(this.state)
        var json = {"username":this.state.username, "password": this.state.password};
        console.log(JSON.stringify(json))
        var isExist = await this.isExistUser(JSON.stringify(json));
        
        if (isExist) {
            this.setState({error: 'Username already exists'});
        }else{
            if (await this.addUser(json)) {
                this.setState({success: 'Your user has been created'});
                // ajout à la liste
            }else{
                this.setState({error: 'Username already exists'});
            }
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

                            <Form.Group>
                                <Form.Label className="successContent">{this.state.success}</Form.Label>
                            </Form.Group>
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
                            {this.state.listUsers.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.ID}</td>
                                    <td>{item.Username}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

export default AdminUsers