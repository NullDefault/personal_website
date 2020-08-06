import React from 'react';
import '../static/About.css';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function About() {
    return (
        <div className="home-background">
            <Container className="paper-container">
                <Paper className="paper" elevation={30}/>
            </Container>
        </div>
    )
}

export default About;