import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Result extends React.Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: 100 }}>
                    <h1 style={{ marginBottom: 50 }}>Vote Result :</h1>


                    <Row style={{ textAlign: 'center' }}>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Choix A</Card.Title>
                                    <Card.Text style={{ fontSize: 20 }}>6 vote(s)</Card.Text>
                                    <Button variant="primary">Voter</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Choix B</Card.Title>
                                    <Card.Text style={{ fontSize: 20 }}>52 vote(s)</Card.Text>
                                    <Button variant="danger">Retirer</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Choix C</Card.Title>
                                    <Card.Text style={{ fontSize: 20 }}>4 vote(s)</Card.Text>
                                    <Button variant="primary">Voter</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Result