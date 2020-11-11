import React from 'react';
import '../../static/css/pages/Biography.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedBackground from "../components/AnimatedBackground";
import {Col} from "react-bootstrap";

function Biography() {
    return (
        <div className="home-background">
            <header className="home-header">
                <Col>
                    <div className="pb-5">
                        <p>
                            Nature is pliable, obedient. And the <i>logos</i> that governs it has no reason to do evil.
                            <div/>
                            It knows no evil, does none, and causes harm to nothing. It dictates all beginnings and all
                            endings.
                        </p>
                        <p className="align-items-end">
                            - Marcus Aurelius
                        </p>
                    </div>
                    <div>
                        <p className="px-5 pb-2">
                            The quote above is significant to me because it encompasses a large part of why I have
                            chosen to do what I do.
                            Since my youth, I have always had a fascination with chaos. I saw it everywhere I looked -
                            in the ways plants grew,
                            how my legos would always end up and how people acted. It seemed to me that although we, as
                            humans, had rules
                            for almost everything, the world did not share the sentiment.
                        </p>
                    </div>
                </Col>
            </header>
            <AnimatedBackground/>
        </div>
    );
}

export default Biography;
