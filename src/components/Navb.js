import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/navb.css';

class Navb extends Component {

    state = {
        topOfPage: 'top'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 10) {
            this.setState({ topOfPage: 'nottop' })
        } else {
            this.setState({ topOfPage: 'top' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="md" fixed="top" className={this.state.topOfPage}>
                <Container>
                    <Navbar.Brand href="#about"><p>callum </p>BORWELL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#demos">Projects</Nav.Link>
                            <Nav.Link href="#study">Study</Nav.Link>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        )
    }
}

export default Navb;