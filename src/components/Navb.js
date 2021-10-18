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
                    <Navbar.Brand href="#about">
                        {/* <p>callum </p>BORWELL */}
                        <svg width="200" height="75" id="handwriting" >
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="-12px"
                                viewBox="0 0 400 150" style={{enableBackground:'new 0 0 400 150'}} xmlSpace="preserve">
                                
                                <text id="borwell" transform="matrix(1.0326 0 0 1 137.284 99.0688)" className="st0 st1 st2">BORWELL</text>
                                <path id="XMLID_2_" className="st3" d="M24.1,80c-5.2-0.9-10.8,1.2-14.1,5.4c-1.9,2.4-3,6.1-1.2,8.5c1.7,2.2,5,2.4,7.5,1.3
	c2.5-1.1,4.4-3.1,6.3-5.1c4.3-4.3,8.9-8.1,13.9-11.5c1.8-1.2,3.7-2.3,5.8-2.3c2.1,0,4.4,1.7,4.1,3.9c0.7-1.1-0.1-2.7-1.3-3.1
	c-1.2-0.4-2.6,0-3.8,0.6c-4.2,2-7.5,5.9-8.7,10.4c-0.3,1-0.4,2.2,0.4,2.9c1.2,1.1,3.1-0.2,4.2-1.5c3-3.6,6-7.2,9-10.8
	c-4.6,4.6-6.6,11.6-5.1,17.9c17.7-12.1,28.5-31.8,37.7-51.1c1.4-3,2.5-7.3-0.4-9C67.3,55,59.2,75.3,54.6,96.5
	c-0.5,2.2-0.6,5.2,1.5,6c1.4,0.5,2.9-0.2,4.1-1c21-12.8,38.5-31.1,50.4-52.5c5.4-9.7,9.6-21.6,4.6-31.5
	c-17,27.7-30.7,57.4-40.6,88.3c4-0.2,7.1-3.5,9.8-6.6c6.5-7.6,12.6-15.5,18.3-23.7C97.9,82.4,94,90,91.1,97.9
	c-0.8,2.1-0.8,5.4,1.4,5.6c0.9,0.1,1.8-0.5,2.5-1.1c9.3-7.6,14.3-19.1,19-30.1C110,81.1,107,90.4,105,100c7.3-8.2,13.8-17,19.4-26.4
	c-0.8,11-3.8,21.8-8.7,31.6c2.5-6.5,7.3-12.1,13.2-15.7c0.3,6-1.2,12.2-4.2,17.4c2.4-8.1,8.4-15,15.9-18.6
	c2.9,6.1-3.8,12.3-5.3,18.9c-0.3,1.1-0.3,2.5,0.5,3.3c0.7,0.8,2,1,3.1,1.1c6.9,0.5,13.9,0.2,20.8-0.2c34.4-2,68.6-6.4,102.3-13.3"/>
                            </svg>
                        </svg>
                    </Navbar.Brand>
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