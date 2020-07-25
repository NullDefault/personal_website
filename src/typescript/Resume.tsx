import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {resumePDF} from '../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <div className="home-background">
            <div>
                <Document
                    file={resumePDF}
                >
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    )
}

export default Resume;