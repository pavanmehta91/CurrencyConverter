import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
          };
          this.incrementCounter = this.incrementCounter.bind(this);
          this.decrementCounter = this.decrementCounter.bind(this);
    }
    incrementCounter(){
        //console.log('INCREMENTED');
        //console.log('this.state',this.state);
        this.setState({
          counter: this.state.counter + 1,
          isIncrementing: true
        });
        //this.state.counter++;
      }
      decrementCounter(){
        //console.log('DECREMENTED');
        ///console.log('this.state',this.state);
        if(this.state.counter === 0){
          return;
        }
        
        this.setState({
          counter: this.state.counter - 1,
          isIncrementing: false
        });
      }
    render(){
      console.log('in counter render');
        let {counter} = this.state;
        return (
            <div className="counter-app">
            <div> 
                <span>{counter} </span>
                <button onClick={()=>{
                    this.props.removeCounter(this.props.counterIndex)
                }}>Remove counter</button>
            </div>
            <button onClick={this.decrementCounter}> - </button>
            <button onClick={this.incrementCounter} > + </button>
          </div>
        );
    }
}