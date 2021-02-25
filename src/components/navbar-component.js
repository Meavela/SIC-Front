import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {

        const { username } = this.props

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>
                        <Link
                            to={{
                                pathname: "/",
                                state: { username }
                            }}
                        >Votes</Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link
                            to={{
                                pathname: "/admin",
                                state: { username }
                            }}
                        >Admin</Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            {
                                username ?
                                    <p style={{ color: "white" }}>{username}</p>
                                    :
                                    <Nav.Link href="/login">Se connecter</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent