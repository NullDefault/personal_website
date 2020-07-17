import React from 'react';
import Container from '@material-ui/core/Container'
import davePhoto from '../../assets/dave_photo.png';
import '../../static/css/AboutPage.css';

function About() {
    return (
        <div className="HomeBackground">
            <Container className="AboutPageWrapper">
                <img src={davePhoto}
                     className="Photo-of-me"
                     alt="its me"/>
            </Container>

        </div>
    )
}

export default About;