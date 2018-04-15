import React, { Component } from 'react';
//ref={(input) => { this.textInput = input; }} 
export default class UnconrolledCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0
        }
    }

    adder = () => {
        let num1 = this.textInput1.value;
        let num2 = this.textInput2.value;
        num1 = +num1;
        num2 = +num2;
        this.setState({
            results: num1 + num2
        });
    }
    subtract = () => {
        let num1 = this.textInput1.value;
        let num2 = this.textInput2.value;
        num1 = +num1;
        num2 = +num2;
        this.setState({
            results: num1 - num2
        });
    }
    render(){
        return(
        <div>
            <h2>uncontrolled input example</h2>
            <input name='num1'  ref={(input) => { this.textInput1 = input; }} type="number" />
            <input name='num2' ref={(input) => { this.textInput2 = input; }}  type="number" />
            <button onClick={this.adder}> Add </button>
            <button onClick={this.subtract}> Subtract </button>
            <div>
                {this.state.results || 'Nothing to show'}    
            </div>
        </div>
        );
    }
}