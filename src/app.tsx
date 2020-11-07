import React from "react";

import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Home from "./typescript/pages/Home";
import About from "./typescript/pages/About";
import ProjectGallery from "./typescript/pages/ProjectGallery";
import Contact from "./typescript/pages/Contact";
import Footer from "./typescript/components/Footer";
import TopNavigationBar from "./typescript/components/TopNavigationBar";
import Resume from "./typescript/pages/Resume";
import AnimatedBackground from "./typescript/components/AnimatedBackground";
import DataVizProject from "./typescript/pages/DataVizProject";
import {Container} from "react-bootstrap";

const App = () => (
    <div>
        <TopNavigationBar/>
        <Router>
            <Container fluid className="app">
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route exact path="/home" component={Home}/>
                <Route path="/dataVizProject" component={DataVizProject}/>
                <Route path="/project_gallery" component={ProjectGallery}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
            </Container>
        </Router>
        <Footer/>
    </div>
);

export default App;

