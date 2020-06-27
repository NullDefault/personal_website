import {BottomNavigation, ButtonGroup, IconButton} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from "react";

function Footer() {
    return (
        <BottomNavigation>
            children=<ButtonGroup color="default" aria-label="outlined primary button group">
            <IconButton aria-label="Navigate Left" size='medium'>
                <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton aria-label="E-Mail"
                        size='medium'
                        onClick={() => {
                            window.location.href = "mailto:davisha999@gmail.com"
                        }}>
                <EmailIcon style={{fill: "#d44638"}}/>
            </IconButton>
            <IconButton aria-label="LinkedIn"
                        size='medium'
                        onClick={() => {
                            window.location.href = "https://linkedin.com/in/nulldefault"
                        }}>
                <LinkedInIcon style={{fill: "#0072b1"}}/>
            </IconButton>
            <IconButton aria-label="GitHub"
                        size='medium'
                        onClick={() => {
                            window.location.href = "https://github.com/NullDefault"
                        }}>
                <GitHubIcon style={{fill: "#28a745"}}/>
            </IconButton>
            <IconButton aria-label="Navigate Right" size='medium'>
                <KeyboardArrowRightIcon/>
            </IconButton>
        </ButtonGroup>
        </BottomNavigation>
    )
}

export default Footer;