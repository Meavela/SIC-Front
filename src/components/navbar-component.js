import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
                    <Navbar.Brand href="/">Votes</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            {
                                username ?
                                    <p>{username}</p>
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