import React from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProjectGallery from "./ProjectGallery";
import Contact from "./Contact";
import {Footer, TopNavigationBar} from "./components";
import Resume from "./Resume";
import {pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = () => (
    <Router>
        <TopNavigationBar/>
        <div>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/project_gallery" component={ProjectGallery}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
        </div>
        <Footer/>
    </Router>
);

export default App;

