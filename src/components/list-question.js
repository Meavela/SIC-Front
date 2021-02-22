import axios from 'axios';
import React from 'react';
import Result from './result'
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listQuestion: [],
        };
    }

    viewResult() {
        ;
    }

    getQuestions() {
        var questions = []
        axios.get('http://localhost:3005/question/all').then(
            response => {
                questions = response
                console.log(questions)
            }
        )

        this.setState({
            listQuestion: questions
        })
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={4}>
                        <ListGroup style={{ marginTop: 200 }} defaultActiveKey="#id1">
                            {this.state.listQuestion.map((item, i) =>
                                <ListGroup.Item action href="#id1" onClick={this.viewResult("id1")}>
                                    Question 1
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col>
                        <Result questionID={"1"} />
                    </Col>
                </Row>



            </div>
        )
    }
}

export default Questions