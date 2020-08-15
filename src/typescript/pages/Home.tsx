import React from 'react';
import '../../static/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactTypingEffect from 'react-typing-effect';
import Container from '@material-ui/core/Container'

import ImageCycle from '../components/ImageCycle';

function Home() {
    return (
        <div className="home-background">
            <header className="home-header">

                <Container className="cycle-container">
                    <ImageCycle/>
                </Container>

                <ReactTypingEffect
                    text={["a software developer.", "an artificial intelligence enthusiast.", "a designer."]}
                    staticText={"I'm David Nesterov-Rappoport and I am"}
                    speed={120}
                    eraseDelay={2000}
                    typingDelay={1000}
                />

            </header>
        </div>
    );
}

export default Home;
