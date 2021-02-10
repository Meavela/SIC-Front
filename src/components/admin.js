import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import '../css/admin.css';

class Admin extends React.Component {
    render(){
        return (
            <>
                <Container className="styleContainer">
                    <Row>
                        <Col className="styleRow">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Admin Users</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create new users</Card.Subtitle>
                                    <Card.Text>
                                    This admin pages allows to create new users account for the application.
                                    Only an administrator can access to this page.
                                    </Card.Text>
                                    <Card.Link href="/admin/users">Access here</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="styleRow">
                        <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Admin Votes</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create/Delete choices votes</Card.Subtitle>
                                    <Card.Text>
                                    This admin pages allows to create or delete choices for votes.
                                    We can't delete user vote, only the choices.
                                    Only an administrator can access to this page.
                                    </Card.Text>
                                    <Card.Link href="/admin/votes">Access here</Card.Link>
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