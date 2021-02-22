import axios from 'axios';
import React from 'react';
import Result from './result'
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listQuestion: [],
            activeItem: 1
        };
    }

    switchQuestion(id) {
        console.log(id)
        this.setState({activeItem: id})
    }

    async getQuestions() {
        let questions = await axios.get('http://localhost:3005/questions/all')
        console.log(questions)
        return questions;
    }

    componentDidMount() {
        this.getQuestions().then(res => {
            this.setState({
                listQuestion: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={4}>
                        <ListGroup style={{ marginTop: 200 }}>
                            {this.state.listQuestion.map((item, i) =>
                                <ListGroup.Item style={item.ID == this.state.activeItem ? {backgroundColor: '#0069D9', color: "white"} : null} key={i} action onClick={() => this.switchQuestion(item.ID)}>
                                    {item.Text}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col>
                        <Result questionID={this.state.activeItem} username={this.props.username} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Questions