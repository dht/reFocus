import React, {Component} from 'react';
import './Refocus1.css';
import CircleIcon from '../CircleIcon/CircleIcon';
import CircleArc from '../Arc/CircleArc';
import Title from '../Title/Title';

import icons from '../../constants/icons'
import Animation from '../../utils/Animation'

class Refocus1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentIconIndex: 0,
            degrees: 0,
            angle: 0,
        };

        this.step = this.step.bind(this);
        this.finish = this.finish.bind(this);
        this.Animation = new Animation(props.gameplay, this.step, this.finish);
    }

    componentWillReceiveProps(props) {
        if (props.gameplay) {
            this.Animation.setGameplay(props.gameplay);
            this.Animation.start();
        }
    }

    step(instructions) {
        this.setState({
            angle: instructions.angle || 30,
            currentIconIndex: instructions.iconIndex,
            degrees: instructions.degrees,
            text: instructions.sentence,
        });
    }

    finish() {
        setTimeout(() => {
            this.setState({
                isFinal: true,
                text: '',
            })
        }, 100);

        setTimeout(() => {
            this.setState({
                angle: 30,
                currentIconIndex: 0,
                degrees: -15,
                text: 'refocus',
                bigTitle: true,
                isFinal: false
            })
        }, 3800);
    }

    renderFinal() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(degrees => <CircleArc
            className={`arc-${degrees} final-arc`} angle={360 / 14} degrees={degrees * (360 / 14) - 15} key={degrees}/>)
    }

    render() {
        const {degrees, angle, currentIconIndex, text, isFinal, bigTitle} = this.state;

        return (
            <div className="Box">
                <div className="circle">
                    <div className="dot">
                    </div>
                    <Title text={text} big={bigTitle}/>
                    <CircleArc angle={angle} degrees={degrees}/>
                    {isFinal ? this.renderFinal() : null}
                    {
                        icons.map((icon, index) =>
                            <CircleIcon key={icon}
                                        icon={icon}
                                        scale={currentIconIndex === index ? 1.4 : 1}
                                        index={index}
                                        iconsCount={icons.length}/>)
                    }
                </div>
            </div>
        );
    }
}

export default Refocus1;
