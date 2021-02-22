import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/admin.css';

class Admin extends React.Component {
    render(){
        return (
            <>
                <Container className="styleContainer">
                    <Row>
                        <Col>
                            <Card className="styleCard">
                                <Card.Body>
                                    <Card.Title>Admin Users</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create new users</Card.Subtitle>
                                    <Card.Text>
                                    This admin pages allows to create new users account for the application.
                                    Only an administrator can access to this page.
                                    </Card.Text>
                                    <Link to="/admin/users" >Access here</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="styleCard">
                                <Card.Body>
                                    <Card.Title>Admin Votes</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create/Delete choices votes</Card.Subtitle>
                                    <Card.Text>
                                    This admin pages allows to create or delete choices for votes.
                                    We can't delete user vote, only the choices.
                                    Only an administrator can access to this page.
                                    </Card.Text>
                                    <Link to="/admin/votes" >Access here</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Admin