import React from 'react';
import '../../static/css/pages/ProjectGallery.css';

import 'react-awesome-slider/dist/styles.css';
import Container from '@material-ui/core/Container'


const projectsData = [
    {
        title: 'beeSim',
        description: 'pyGame bee simulation with a focus on agent based modeling.',
    },
    {
        title: 'AI Projects',
        description: 'Various AI projects and explorations.',
    },
    {
        title: 'Depths',
        description: 'pyGame roguelike game.',
    },
    {
        title: 'SIR Disease Simulation',
        description: 'SIR Simulation Project for my Data Science Class',
    },
    {
        title: 'Processing Sketches',
        description: 'A collection of sketches in the Processing language',
    },
    {
        title: 'Various Web Dev Stuff',
        description: 'My all purpose repository for web development experiments',
    },
]

class ProjectGallery extends React.Component {
    state: { current: number; };

    constructor(props: any) {
        super(props);
        this.state = {current: 0};
    }

    updateTextInfo = () => {
        let right = true;
        let last_state = this.state.current;
        let new_state;
        if (right) {
            if (last_state === projectsData.length - 1) {
                new_state = 0;
            } else {
                new_state = last_state + 1;
            }
        } else {
            if (last_state === 0) {
                new_state = projectsData.length - 1
            } else {
                new_state = last_state - 1;
            }
        }
        this.setState(
            {current: new_state}
        )
    }

    render() {
        return (
            <div className="home-background">
                <Container className="project-gallery">
                    <Container className='project-display'>

                    </Container>
                    <Container className='project-summary'>

                    </Container>
                    <Container className='project-tech'>

                    </Container>
                </Container>
            </div>
        )
    }
}

export default ProjectGallery;