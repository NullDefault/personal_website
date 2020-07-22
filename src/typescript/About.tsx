import React from 'react';
import Container from '@material-ui/core/Container';
import davePhoto from '../assets/dave_photo.png';
import Paper from '@material-ui/core/Paper';
import '../static/css/AboutPage.css';

function About() {
    return (
        <div className="home-background">
            <div className="top-spacer"/>
                <Container className="paper-container">
                    <Paper className="paper" elevation={30}>
                        <img src={davePhoto} alt={'me!'} className={'photo-of-me'}>
                        </img>
                    </Paper>
                </Container>
        </div>
    )
}

export default About;