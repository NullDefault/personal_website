import React from "react";
import sde_noun_icon from "../assets/nounProjectIcons/noun_coding_2828165.svg";
import ai_noun_icon from "../assets/nounProjectIcons/noun_coding_2933328.svg";
import code_noun_icon from "../assets/nounProjectIcons/noun_design_3160558.svg";


class ImageCycle extends React.Component <{}, { currentImage: number, images: object}>{
    private readonly images: any[];
    private readonly cycleSpeed: number;
    private readonly timings: number[];
    constructor({props}: { props: any }) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.cycleSpeed = 8000;
        this.images = [
            sde_noun_icon,
            ai_noun_icon,
            code_noun_icon,
        ];
        this.timings = [
            8500,
            12500,
            6500
        ]
        this.state = {
            currentImage: 0,
        };
    }

    switchImage() {
        if (this.state.currentImage < this.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
        setTimeout(this.switchImage, this.timings[this.state.currentImage]);
        return this.state.currentImage;
    }

    getImage(){
        return this.images[this.state.currentImage]
    }

    componentDidMount() {
        setTimeout(this.switchImage, this.timings[this.state.currentImage]);
    }

    render() {
        return (
            <div className="slideshow-container">
            <object data={ this.getImage() } type="image/svg+xml" className="noun-icon">
                <img src={ this.getImage() }  alt={"noun_icon"}/>
            </object>
            </div>
    );
    }
}

export default ImageCycle;