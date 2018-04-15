import React, { Component } from 'react';
import './App.css';
//import Counter from './Counter';
//import Greetings from './Greetings';
//import SearchList from './SearchList';
//import SimpleCalculator from './SimpleCalculator';
//import SimpleUncontrolledCalc from './SimpleUncontrolledCalc';
//import CurrencyConvetor from './CurrencyConvetor';
import StylishCurrencyConvetor from './StylishCurrencyConvertor';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      orderList : [{
        id: 1,
        name: 'Pencil',
        quantity: 5,
        price: 10
      },{
        id: 2,
        name: 'Chocolate',
        quantity: 2,
        price: 20
      },{
        id: 3,
        name: 'Cold drink',
        quantity: 2,
        price: 15
      },{
        id: 4,
        name: 'Milk',
        quantity: 5,
        price: 25
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{margin:'0 200px'}}>
         <StylishCurrencyConvetor />
        </div>
      </div>
    );
  }
}

export default App
/*{/* <Greetings  name={'Mike'} message={"Morning"} />
        <SearchList /> *


            let { orderList } = this.state;
    let totalAmount = orderList.reduce((sum,orderItem)=>{
      return sum += orderItem.quantity * orderItem.price;
    },0.0);
 */