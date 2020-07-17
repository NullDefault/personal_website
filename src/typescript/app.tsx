import React from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
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
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
        </div>
        <Footer/>
    </Router>
);

export default App;

