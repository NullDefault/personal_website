import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/HomePage.css';


function Home() {
    return (
        <div className="HomeBackground">
            <header className="HomeHeader">
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
