import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
//import TniCard from "./card";
import { config } from "react-spring";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import img2 from './images/incogni.png'
import img1 from './images/nordpass.png'
import img3 from './images/nordvpn.jpg'
import img4 from './images/tbd.png'
import { FaLocationArrow } from "react-icons/fa";
const { v4: uuidv4 } = require('uuid');

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goToSlide: 0
        };
    }

    slides = [
        {
            key: uuidv4(),
            content: (
                <Card className="card-main bg-transparent border-0">
                    <img src={img1} className="rounded-[30px]" alt="1" />
                </Card>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card className="card-main bg-transparent border-0">
                    <img src={img2} className="rounded-[30px]" alt="1" />
                </Card>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card className="card-main bg-transparent border-0">
                    <img src={img3} className="rounded-[30px]" alt="1" />
                </Card>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card className="card-main bg-transparent border-0">
                    <img src={img4} className="rounded-[30px]" alt="1" />
                </Card>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card className="card-main bg-transparent border-0">
                    <img src={img4} className="rounded-[30px]" alt="1" />
                </Card>
            )
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    switchForward = () => {
        let newSlide =
            this.state.goToSlide === this.slides.length - 1
                ? 0
                : this.state.goToSlide + 1;
        this.setState({ goToSlide: newSlide });
    };

    switchBackward = () => {
        let newSlide =
            this.state.goToSlide === 0
                ? this.slides.length - 1
                : this.state.goToSlide - 1;
        this.setState({ goToSlide: newSlide });
    };

    render() {
        return (
            <div className='pt-[-100px] max-w-[871px] w-[40vw] 3xxs:w-[60vw]' style={{ height: "200px", margin: "0 auto" }}>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius="10"
                    animationConfig={config.gentle}
                    className='overflow-x-hidden'
                />
                <div className="grid grid-cols-2 justify-items-center mt-4 h-6 w-[150px] mx-auto">
                    <button onClick={this.switchBackward} className="w-7">
                        <FaLocationArrow className="rotate-[225deg] h-6 w-6 ml-[5.5px] hover:translate-y-[-2px] transition-all" />
                    </button>
                    <button onClick={this.switchForward} className="w-7">
                        <FaLocationArrow className="rotate-45 h-6 w-6 ml-[-1.5px] hover:translate-y-[-2px] transition-all" />
                    </button>
                </div>
            </div>
        );
    }
}
export default MyCarousel;
