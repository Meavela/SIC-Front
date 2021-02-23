import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Questions from './list-question';

class AdminVotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            questionID: 1
        }
    }

    setQuestionID = (id) => {
        this.setState({ questionID: id })
    }

    changeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    submitCreate = async () => {
        await axios.post('http://localhost:3005/option/add', {
            Text: this.state.title,
            Question: this.state.questionID
        })

        let dump = {...this.state};
        this.setState({questionID: 5000}, () => {
            this.setState({questionID: dump.questionID})
        })
    }

    render() {

        return (
            <>
                <Link to="/admin" >⬅ Back</Link>
                <Questions questionID={this.state.questionID} setQuestionID={this.setQuestionID} admin={true} />
                <div>
                    <h3>Ajouter une option de vote</h3>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Titre :</Form.Label>
                            <Form.Control type="text" onChange={this.changeTitle} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="submitButton">
                            <Button variant="primary" onClick={this.submitCreate}>
                                Create
                                </Button>
                        </Form.Group>
                    </Form>
                </div>
            </>
        )
    }
}

export default AdminVotes