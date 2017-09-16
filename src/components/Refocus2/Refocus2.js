import React, {Component} from 'react';
import './Refocus2.css';
import sentences from '../../constants/sentences';

class Refocus2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            text: ''
        };

        this.style = this.style.bind(this);
    }

    loadNextSentence() {
        const {index} = this.state,
            sentence = sentences[index];

        if (sentence) {
            this.setState({text: ''});
            this.setState({text: sentence});

            setTimeout(() => {
                this.loadNextSentence();
            }, sentence.length * 60 + 1000);
        }

        this.setState({index: index + 1});
    }


    componentDidMount() {
        this.loadNextSentence();
    }

    style(word) {
        const len = word.length;

        this.delay += this.lastLength * 60;

        this.lastLength = len;

        return {
            animationDelay: `${this.delay}ms`,
        }
    }

    render() {
        const {text} = this.state,
            words = text.split(' ');

        this.delay = 0;
        this.lastLength = 0;

        return (
            <div className="App canvas">
                <div>
                {words.map((word, index) => <span key={index} style={this.style(word, index)} className="word">{word} </span>)}
                </div>
            </div>
        );
    }
}

export default Refocus2;
