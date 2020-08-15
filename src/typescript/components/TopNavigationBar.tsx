import Navbar from "react-bootstrap/Navbar";
import logo from "../../static/assets/null_icon.png";
import {Nav, NavDropdown} from "react-bootstrap";
import React from "react";


class TopNavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="sm" className="navbar">

                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="navbar-logo"
                        alt="Null Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About Me</Nav.Link>
                        <NavDropdown title="Experience" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="resume">Resume</NavDropdown.Item>
                            <NavDropdown.Item href="project_gallery">Project Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="contact">Contact Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default TopNavigationBar;