import React from "react";
import sde_noun_icon from "../../static/assets/icons/noun_coding_2828165.svg";
import ai_noun_icon from "../../static/assets/icons/noun_coding_2933328.svg";
import code_noun_icon from "../../static/assets/icons/noun_design_3160558.svg";


class ImageCycle extends React.Component <{}, { current: number }> {
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
            current: 0,
        };
    }

    switchImage() {
        if (this.state.current < this.images.length - 1) {
            this.setState({
                current: this.state.current + 1
            });
        } else {
            this.setState({
                current: 0
            });
        }
        setTimeout(this.switchImage, this.timings[this.state.current]);
        return this.state.current;
    }

    getImage() {
        return this.images[this.state.current]
    }

    componentDidMount() {
        setTimeout(this.switchImage, this.timings[this.state.current]);
    }

    render() {
        return (
            <div className="slideshow-container">
                <object data={this.getImage()} type="image/svg+xml" className="noun-icon">
                    <img src={this.getImage()} alt={"noun_icon"}/>
                </object>
            </div>
        );
    }
}

export default ImageCycle;