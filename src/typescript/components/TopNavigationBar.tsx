import Navbar from "react-bootstrap/Navbar";
import logo from "../../static/assets/icons/null-icon.png";
import '../../static/css/components/TopNavigationBar.css';
import {Nav, NavDropdown} from "react-bootstrap";
import React from "react";


class TopNavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="sm" className="navbar navbar-dark">

                <Navbar.Brand href="#home" className="null-logo">
                    <img
                        src={logo}
                        width={50}
                        height={50}
                        className="navbar-logo"
                        alt="Null Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default TopNavigationBar;