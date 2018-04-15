import React, { Component } from 'react';
//ref={(input) => { this.textInput = input; }} 
export default class SimpleCalculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0
        }
    }
    onInputChange = (e) => {
        let value = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : value * 2
        });
    }

    adder = () => {
        let {num1, num2} = this.state;
        num1 = +num1;
        num2 = +num2;
        this.setState({
            results: num1 + num2
        });
    }
    subtract = () => {
        let {num1,num2} = this.state;
        num1 = +num1;
        num2 = +num2;
        this.setState({
            results: num1 - num2
        });
    }
    render(){
        return(
            <div>
                <h2>controlled input example</h2>
                <input name='num1' value={this.state.num1} onChange={this.onInputChange} type="number" />
                <input name='num2' value={this.state.num2} onChange={this.onInputChange} type="number" />
                <button onClick={this.adder}> Add </button>
                <button onClick={this.subtract}> Subtract </button>
                <div>
                    {this.state.results || 'Nothing to show'}    
                </div>
            </div>
        );
    }
}