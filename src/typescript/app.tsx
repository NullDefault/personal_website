import React from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProjectGallery from "./ProjectGallery";
import Contact from "./Contact";
import {Footer, TopNavigationBar} from "./components";

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
            <Route path="/contact" component={Contact}/>
        </div>
        <Footer/>
    </Router>
);

export default App;

