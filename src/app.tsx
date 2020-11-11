import React from "react";

import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Home from "./typescript/pages/Home";
import Footer from "./typescript/components/Footer";
import TopNavigationBar from "./typescript/components/TopNavigationBar";
import Resume from "./typescript/pages/Resume";
import DataVizProject from "./typescript/pages/DataVizProject";
import {Container} from "react-bootstrap";
import Biography from "./typescript/pages/Biography";

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
                <Route path="/resume" component={Resume}/>
                <Route path="/bio" component={Biography}/>
            </Container>
        </Router>
        <Footer/>
    </div>
);

export default App;

