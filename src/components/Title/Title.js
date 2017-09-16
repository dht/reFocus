import React, {Component} from 'react';
import './Title.css';

class Title extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
        };
    }

    componentWillReceiveProps(props) {
        const {text} = props;

        if (text !== this.state.text) {
            this.setState({
                text,
            });
        }
    }

    render() {
        const {big} = this.props;
        const {text} = this.state;

        return (
            <div className={`Title-container ${big ? 'big' : ''}`}>
                {text}
            </div>
        );
    }
}

export default Title;
