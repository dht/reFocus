import React, {Component} from 'react';
import './App.css';
import Refocus1 from './Refocus1/Refocus1';
import Refocus2 from './Refocus2/Refocus2';
import Tool from './Tool/Tool';
import ActionBox from './ActionBox/ActionBox';

import {getData, setLanguage} from '../constants/data';
import {makePlan} from '../constants/gameplay';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAction: false,
            showTools: false,
        };

        this.showAction = this.showAction.bind(this);
    }

    componentDidMount() {
        const language = document.location.hash.replace('#/', '');

        setLanguage(language);
        const data = getData();

        this.setState({
            strings: data.strings,
            story: data.story,
            tools: data.tools,
            gameplay: makePlan(data.verbs)
        })
    }

    showAction() {
        setTimeout(() => {
            this.setState({
                showAction: true,
            })
        }, 500);
    }

    render() {
        const {showAction, showTools, tools, story, gameplay, strings} = this.state;

        return (
            <div className="">
                <Refocus1 gameplay={gameplay}/>
                {!showAction ? <Refocus2 story={story} onFinish={this.showAction}/> : null}

                {showAction && !showTools ? <ActionBox
                    icon="gamepad"
                    title={strings['see_the_tools']}
                    onClick={() => this.setState({showTools: true})}/> : null}
                {showTools ? tools.map(tool => <Tool key={tool.id} tool={tool}/>) : null}
            </div>
        );
    }
}

export default App;
