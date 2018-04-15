import React, { Component } from 'react';

export default class DigitalClock extends Component {

    constructor() {
        super();
        this.state = {
             time: new Date()
         }; // initialise the state
         console.log('inside the constructor');
    }

    componentDidMount() { // create the interval once component is mounted
        console.log('inside did mount');
        setInterval
        this.update = setInterval(() => {
            console.log('updating the time ticker');
            this.setState({ time: new Date() });
        }, 1 * 10000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        console.log('in componentwillunmount');
        clearInterval(this.update);
    }

    render() {
        console.log('render method of digital clock');
        const { time } = this.state; // retrieve the time from state

        return (<div>
            <h1>Digital Clock</h1>
            <h2>
                {time.toLocaleTimeString()}
            </h2>
        </div>);
    }
}
