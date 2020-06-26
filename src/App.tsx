import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {ButtonGroup, IconButton} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/null_icon.png';
import './App.css';


function App() {
    return (
        <div className="App">
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact-info">Contact Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <header className="App-header">
                <ReactTypingEffect
                    text={["a software developer.", "an artificial intelligence enthusiast.", "a designer."]}
                    staticText={"Hello, my name is David Nesterov-Rappoport and I'm"}
                    speed={120}
                    eraseDelay={2000}
                    typingDelay={1000}
                />

                <ButtonGroup color="default" aria-label="outlined primary button group">
                    <IconButton aria-label="E-Mail" size='medium'>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton aria-label="LinkedIn" size='medium'>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton aria-label="GitHub" size='medium'>
                        <GitHubIcon/>
                    </IconButton>
                </ButtonGroup>

                Find Out What I Do
                <IconButton aria-label="DownScroll" size='medium' color='inherit'>
                    <KeyboardArrowDownIcon/>
                </IconButton>
            </header>
        </div>
    );
}

export default App;
