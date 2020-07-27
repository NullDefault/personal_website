import React from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Home from "./typescript/Home";
import About from "./typescript/About";
import ProjectGallery from "./typescript/ProjectGallery";
import Contact from "./typescript/Contact";
import Footer from "./typescript/components/Footer";
import TopNavigationBar from "./typescript/components/TopNavigationBar";
import Resume from "./typescript/Resume";


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

