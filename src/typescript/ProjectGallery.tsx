import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import beeSimScreenshot from '../assets/screenshots/beesim_screenshot.gif';
import 'react-awesome-slider/dist/styles.css';
import '../static/css/ProjectGallery.css';
import Container from '@material-ui/core/Container'
import aiScreenshot from "../assets/screenshots/ai_screenshot.gif";
import depthsScreenshot from "../assets/screenshots/depths_screenshot.gif";
import processingScreenshot from "../assets/screenshots/processing_screenshot.gif";
import TDDScreenshot from "../assets/screenshots/tdn_screenshot.gif";
import JSScreenshot from '../assets/screenshots/js_screenshot.gif';
import {Paper} from "@material-ui/core";

class ProjectGallery extends React.Component {
    state: { current: number; };
    projectsData = [
        {
            img: beeSimScreenshot,
            title: 'beeSim',
            description: 'pyGame bee simulation with a focus on agent based modeling.',
        },
        {
            img: aiScreenshot,
            title: 'AI Projects',
            description: 'Various AI projects and explorations.',
        },
        {
            img: depthsScreenshot,
            title: 'Depths',
            description: 'pyGame roguelike game.',
        },
        {
            img: TDDScreenshot,
            title: 'SIR Disease Simulation',
            description: 'SIR Simulation Project for my Data Science Class',
        },
        {
            img: processingScreenshot,
            title: 'Processing Sketches',
            description: 'A collection of sketches in the Processing language',
        },
        {
            img: JSScreenshot,
            title: 'Various Web Dev Stuff',
            description: 'My all purpose repository for web development experiments',
        },
    ]

    constructor(props: any) {
        super(props);
        this.state = {current: 0};
    }

    updateTextInfo = (right: boolean) => {
        let last_state = this.state.current;
        let new_state;
        if(right) {
            if (last_state === this.projectsData.length - 1) {
                new_state = 0;
            } else {
                new_state = last_state + 1;
            }
        }else{
            if (last_state === 0){
                new_state = this.projectsData.length - 1
            } else {
                new_state = last_state - 1;
            }
        }
        this.setState(
            { current: new_state }
        )
    }

    render() {
        return (
            <div className="home-background">
                <header className="HomeHeader">
                    <Container className="project-title">
                        <h1>{this.projectsData[this.state.current].title}</h1>
                    </Container>
                    <Container className="projectGalleryWrap">
                        <AwesomeSlider
                            onTransitionEnd={this.updateTextInfo}>
                            {this.projectsData.map((project) => (
                                <div data-src={project.img}/>
                            ))}
                        </AwesomeSlider>
                    </Container>
                    <Container>
                        <Paper>
                            {this.projectsData[this.state.current].description}
                        </Paper>
                    </Container>
                </header>
            </div>
        )
    }
}

export default ProjectGallery;