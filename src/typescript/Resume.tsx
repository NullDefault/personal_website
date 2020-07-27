import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import resume from "../assets/resume.pdf";
import '../static/Resume.css';
import {Container} from "@material-ui/core";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class Resume extends React.Component {
    render() {
        let pageScale;
        if(window.innerHeight > window.innerWidth){
            pageScale = 0.6;
        }else{
            pageScale = 1;
        }

        return (
            <div className="home-background">
                <div>
                    <div className="resume">
                        <Container maxWidth={"sm"}>
                            <Document file={resume} renderMode={"canvas"}>
                                <Page pageNumber={1} scale={pageScale}>
                                </Page>
                            </Document>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;