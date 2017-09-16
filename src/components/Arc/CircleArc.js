import React, {Component} from 'react';
import Arc from '../Arc/Arc';

class CircleArc extends Component {

    constructor(props) {
        super(props);

        this.arcStyle = this.arcStyle.bind(this);
    }

    arcStyle() {
        const {degrees = 0} = this.props;

        return {
            transform: `translate3d(0, 0, 0) rotate(${degrees}deg)`,
        }
    }

    render() {
        const {angle = 20, className = ''} = this.props;

        return (
            <div style={this.arcStyle()} className={`arc ${className}`}>
                <Arc degrees={angle}/>
            </div>
        );
    }
}

export default CircleArc;
