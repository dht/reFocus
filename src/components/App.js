import React, {Component} from 'react';
import './App.css';
import Refocus1 from './Refocus1/Refocus1';
import Refocus2 from './Refocus2/Refocus2';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        return (
            <div className="">
               <Refocus1 />
               <Refocus2 />
            </div>
        );
    }
}

export default App;
