import React from 'react';

import beeSimScreenshot from "../assets/screenshots/beesim_screenshot.gif";
import aiScreenshot from "../assets/screenshots/ai_screenshot.gif";
import depthsScreenshot from "../assets/screenshots/depths_screenshot.png";
import processingScreenshot from "../assets/screenshots/processing_screenshot.gif";
import TDDScreenshot from "../assets/screenshots/tdn_screenshot.png";
import JSScreenshot from '../assets/screenshots/js_screenshot.gif';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container'

function Resume() {
    const tileData = [
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

    let columns;
    let cell_height;
    if (window.innerWidth < window.innerHeight){
        columns = 1;
        cell_height = 300
    }else{
        columns = 3;
        cell_height = 400;
    }

    return (
        <div className="home-background">
            <header className="HomeHeader">
                <Container className="GridWrap">
                    <GridList cellHeight={cell_height} cols={columns}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} className="grid-tile">
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} color={'inherit'}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </Container>
            </header>
        </div>
    )
}

export default Resume;