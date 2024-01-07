import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">eTracker</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;