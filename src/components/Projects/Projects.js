import React, { Component } from 'react';
// import ParallaxImage from 'react-image-parallax2';
// import ReactZoomy from 'react-zoomy';
import { Carousel, Item, Caption, } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';
import CarouselSlide from '../Carousel/Carousel';
import {Content, ProgressText, Progress} from './Projects.style';

class Projects extends Component {

    render() {
        return (
            <div>
                <CarouselSlide />
            </div>
        );
    }
}

export default Projects;