import {BottomNavigation, ButtonGroup, IconButton} from "@material-ui/core";
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/null_icon.png';
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from "react";

function navigateRight() {
    let currentPage = window.location.pathname;
    switch (currentPage) {
        case '/home':
            window.location.href = 'about';
            break;
        case '/about':
            window.location.href = 'resume';
            break;
        case '/resume':
            window.location.href = 'blog';
            break;
        case '/blog':
            window.location.href = 'contact';
            break;
        case '/contact':
            window.location.href = 'home';
            break;

    }
}

function navigateLeft() {
    let currentPage = window.location.pathname;
    switch (currentPage) {
        case '/home':
            window.location.href = 'contact';
            break;
        case '/about':
            window.location.href = 'home'
            break;
        case '/resume':
            window.location.href = 'about'
            break;
        case '/blog':
            window.location.href = 'resume'
            break;
        case '/contact':
            window.location.href = 'blog'
            break;
    }
}


function Footer() {
    return (
        <BottomNavigation>
            children=<ButtonGroup color="default" aria-label="outlined primary button group">
            <IconButton aria-label="Navigate Left"
                        size='medium'
                        onClick={() => {
                            navigateLeft()
                        }}>
                <KeyboardArrowLeftIcon/>
            </IconButton>
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
            <IconButton aria-label="Navigate Right"
                        size='medium'
                        onClick={() => {
                            navigateRight()
                        }}>
                <KeyboardArrowRightIcon/>
            </IconButton>
        </ButtonGroup>
        </BottomNavigation>
    )
}

function TopNavigationBar() {
    return (
        <Navbar bg="light" expand="md" fixed="top" className="Navbar">
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
                    <Nav.Link href="resume">Resume</Nav.Link>
                    <Nav.Link href="blog">Blog</Nav.Link>
                    <Nav.Link href="contact">Contact Info</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export {Footer, TopNavigationBar};