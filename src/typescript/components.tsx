import {BottomNavigation, ButtonGroup, IconButton} from "@material-ui/core";
import {Nav, NavDropdown} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/null_icon.png';
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

function Footer() {
    return (
        <BottomNavigation>
            children=<ButtonGroup color="default" aria-label="outlined primary button group">
            <IconButton aria-label="E-Mail"
                        size='medium'
                        onClick={() => {
                            window.location.href = "mailto:davisha999@gmail.com"
                        }}>
                <EmailIcon style={{fill: "#d44638"}}/>
            </IconButton>
            <IconButton aria-label="LinkedIn"
                        size='medium'
                        onClick={() => {
                            window.location.href = "https://linkedin.com/in/nulldefault"
                        }}>
                <LinkedInIcon style={{fill: "#0072b1"}}/>
            </IconButton>
            <IconButton aria-label="GitHub"
                        size='medium'
                        onClick={() => {
                            window.location.href = "https://github.com/NullDefault"
                        }}>
                <GitHubIcon style={{fill: "#28a745"}}/>
            </IconButton>
        </ButtonGroup>
        </BottomNavigation>
    )
}

function TopNavigationBar() {
    return (
        <Navbar
            bg="light"
            expand="sm"
            fixed="top"
            className="Navbar"
        >
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="Navbar-logo"
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

export {Footer, TopNavigationBar};