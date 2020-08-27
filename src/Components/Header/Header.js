import React from 'react';
import {Nav,Navbar,} from 'react-bootstrap';
const Header = () => {
    return (
    <div>
        {/* Header Section  */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Course Area</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Courses</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#about-us">About Us</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#check-out" className="btn btn-danger text-white">Check Out</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>    
    );
};

export default Header;