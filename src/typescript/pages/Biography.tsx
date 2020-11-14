import React from 'react';
import '../../static/css/pages/Biography.css';
import davePhoto from '../../static/assets/my-pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedBackground from "../components/AnimatedBackground";
import {Col, Row, Carousel, Container} from "react-bootstrap";

function Biography() {

    let marcusAurelius = <Carousel.Item>
        <Container>
            <div className="quote-text text-white py-5">
                <p>
                    Nature is pliable, obedient. And the <i>logos</i> that governs it has no reason to do evil.
                    It knows no evil, does none, and causes harm to nothing. It dictates all beginnings and all
                    endings.
                </p>
                <p className="align-items-end">
                    - Marcus Aurelius
                </p>
            </div>
        </Container>
    </Carousel.Item>

    let heraclitus = <Carousel.Item>
        <Container>
            <div className="quote-text text-white py-5">
                <p>
                    No man ever steps in the same river twice, for it's not the same river and he's not the same man.
                </p>
                <p className="align-items-end">
                    - Heraclitus
                </p>
            </div>
        </Container>
    </Carousel.Item>

    let darwin = <Carousel.Item>
        <Container>
            <div className="quote-text text-white py-5">
                <p>
                    There is a grandeur to this view of life, with its several powers, having been originally breathed
                    into a few forms
                    or into one: and that whilst this planet has gone cycling on according to the fixed law of gravity,
                    from so simple a beginning
                    endless forms most beautiful and most wonderful have been, and are being, evolved.
                </p>
                <p className="align-items-end">
                    - Charles Darwin
                </p>
            </div>
        </Container>
    </Carousel.Item>

    let kant = <Carousel.Item>
        <Container>
            <div className="quote-text text-white py-5">
                <p>
                    Whereas the beautiful is limited, the sublime is limitless, so that the mind in the presence of the
                    sublime, attempting to imagine what it cannot, has pain in the failure but pleasure in contemplating
                    the immensity of the attempt.
                </p>
                <p className="align-items-end">
                    - Immanuel Kant
                </p>
            </div>
        </Container>
    </Carousel.Item>;


    const quotes = [
        marcusAurelius,
        heraclitus,
        darwin,
        kant
    ];

    let firstCol = <Col className="bio-text">
        <h1>
            <i>Who am I?</i>
        </h1>
        <text>
            I'm David Nesterov-Rappoport and I study information.
            My passions in life are philosophy, technology, design, and above all else, their role
            in
            everyday human life.
            To better understand these phenomena, I seek out answers in evolutionary biology,
            history of
            philosophy, as well as cognitive and system sciences.
        </text>
    </Col>;

    const isMobile = window.innerWidth <= 500;
    let secondCol;
    if(isMobile){
        secondCol = <Col>
            <text className='bio-text my-5'>
                Check out some of my favourite quotes below!
            </text>
            <br/>
            <Container className='flex-fill'>
                <Carousel>
                    {quotes}
                </Carousel>
            </Container>

        </Col>;
    }else{
        secondCol = <Col>
            <img src={davePhoto} alt={'me!'} className='photo-of-me my-5'/>
            <br/>
            <text className='bio-text my-5'>
                Check out some of my favourite quotes below!
            </text>
            <br/>
            <Container className='flex-fill'>
                <Carousel>
                    {quotes}
                </Carousel>
            </Container>
        </Col>;
    }

    let lastCol = <Col className="bio-text">
        <h1>
            <i>What do I do?</i>
        </h1>
        <text>
            I am a skilled full stack developer with a passion for systems design and digital
            aesthetics. With a proven record in and outside of the IDE, I offer a meaningful
            contribution
            in each stage of the software development cycle. Whether it's data analysis, web
            development or machine learning - I get the job done.
        </text>
    </Col>;


    if (isMobile) {
        return (
            <div className="home-background">
                <Col className="justify-content-center">
                    {firstCol}
                    {lastCol}
                <br/>
                    {secondCol}
                </Col>
                <AnimatedBackground/>
            </div>
        );
    } else {
        return (
            <div className="home-background">
                <Col>
                    <Row className="justify-content-center">
                        {firstCol}
                        {secondCol}
                        {lastCol}
                    </Row>
                </Col>
                <AnimatedBackground/>
            </div>
        );
    }

}

export default Biography;
