import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOption: [],
        };
    }

    getOptions() {
        if (this.props.questionID) {
            axios.get('http://localhost:3005/question/' + this.props.questionID).then(
                response => {
                    options = response
                    console.log(options)
                    return options
                }
            )
        } else {
            return []
        }
    }

    async componentDidMount() {
        var options = []
        options = await this.getOptions()
        this.setState({
            listOption: options
        })
    }

    render() {
        if (this.state.listOption != [] || this.state.listOption != undefined) {
            console.log(this.state.listOption)
            return (
                <div>
                    <Container style={{ marginTop: 100 }}>
                        <h1 style={{ marginBottom: 50 }}>Vote Result :</h1>
                        <Row style={{ textAlign: 'center' }}>
                            {this.state.listOption.option.map((item, i) =>
                                <Col sm key={i}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{item.Text}</Card.Title>
                                            <Card.Text style={{ fontSize: 20 }}>6 vote(s)</Card.Text>
                                            <Button variant="primary">Voter</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>

                    </Container>
                </div>
            )
        } else {
            return (null)
        }
    }
}

export default Result