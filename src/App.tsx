import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/null_icon.png';
import davePhoto from './assets/dave_photo.png'
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
                <img src={davePhoto} className="Photo-of-me" alt="its me"/>

                <p>
                </p>

                <ReactTypingEffect
                    text={["a software developer", "an artificial intelligence enthusiast", "a designer"]}
                    staticText={"Hello, my name is David Nesterov-Rappoport and I'm"}
                    speed={133.7}
                    eraseDelay={2020}
                />
            </header>
        </div>
    );
}

export default App;
