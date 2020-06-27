import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../components'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/null_icon.png';
import '../HomeScreen.css';


function HomeScreen() {
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
                        <Nav.Link href="home.html">Home</Nav.Link>
                        <Nav.Link href="about-me.html">About Me</Nav.Link>
                        <Nav.Link href="resume.html">Resume</Nav.Link>
                        <Nav.Link href="blog.html">Blog</Nav.Link>
                        <Nav.Link href="contact-info.html">Contact Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <header className="App-header">

                <ReactTypingEffect
                    text={["a software developer.", "an artificial intelligence enthusiast.", "a designer."]}
                    staticText={"I'm David Nesterov-Rappoport and I am"}
                    speed={120}
                    eraseDelay={2000}
                    typingDelay={1000}
                />

            </header>
            <Footer/>
        </div>
    );
}

export default HomeScreen;
