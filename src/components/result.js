import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            options: null
        };
    }

    componentDidMount() {
        this.getOptions()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.questionID !== prevProps.questionID) {
            this.getOptions()
        }
    }

    async getOptions() {
        let res = await axios.get('http://localhost:3005/question/' + this.props.questionID);
        console.log(res)
        this.setState({
            question: res.data.question,
            options: res.data.option
        })
    }

    render() {

        const { question, options } = this.state;

        return (
            <div>
                {question ?
                    <Container style={{ marginTop: 100 }}>
                        <h1 style={{ marginBottom: 50 }}>Vote Result :</h1>
                        <Row style={{ textAlign: 'center' }}>
                            {options.map((item, i) => {
                                return (
                                    <Col key={i} sm>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{item.Text}</Card.Title>
                                                <Card.Text style={{ fontSize: 20 }}>6 vote(s)</Card.Text>
                                                <Button variant="primary">Voter</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>

                    </Container>
                    :
                    null
                }
            </div>
        )
    }
}

export default Result