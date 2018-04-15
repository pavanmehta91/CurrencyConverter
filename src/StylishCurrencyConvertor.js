import React, { Component } from 'react';
import { DropdownButton, MenuItem, FormControl} from 'react-bootstrap';

export default class StylishCurrencyConvetor extends Component {
    constructor(props){
        super(props);
        this.currencyList = [
            {
              id: "USD",
              name: "US Dollar"
            },
            {
              id: "CAD",
              name: "Canadian Dollar"
            },
            {
              id: "GBP",
              name: "British Pound"
            },
            {
              id: "EUR",
              name: "Euro"
            },
            {
              id: "JPY",
              name: "Japanese Yen"
            },
            {
              id: "INR",
              name: "Indian Rupee"
            }
          ];

        this.state = {
            to: "USD",
            from: "USD",
            value: 1,
            resultValue: 1
        };
    }

    convert = () => {
        var from = this.state.from,
            to = this.state.to,
            val = this.state.value,
            API = `https://api.fixer.io/latest?base=${from}&symbols=${from},${to}`;

        console.log('from=',from);
        console.log('to=',to);
        if(to === from){
            this.setState({
                resultValue: val
            });
        } else {
            fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ 
                    resultValue: data["rates"][to] * val }
                );
            });
        }

    };

    onSelect = (selectID,eventKey) => {
        console.log(selectID,eventKey);
        this.setState({
            [selectID]: eventKey
        },()=>{
            this.convert();
        });
    }
    handleChange = (e) => {
        console.log(e.target.value);
        let value = +(e.target.value);
        let isANumber = !(isNaN(value));
        console.log(isANumber);
        if(isANumber){
            this.setState({
                value: e.target.value
            },()=>{
                this.convert();
            });
        } else {
            //value :1
            alert('Please only enter valid numbers here');
        }

    }
    render(){
        return(
            <div>
                FROM:
            <DropdownButton  
                title= { this.state.from ? this.state.from : 'FROM'}
                id='from'
            >
            {
            this.currencyList.map((currencyItem)=>{
                return ( 
                    <MenuItem 
                        key={currencyItem.id}
                        onSelect={(eventKey)=>{this.onSelect('from',eventKey)}} 
                        eventKey={currencyItem.id}
                    > 
                        {currencyItem.name}
                    </MenuItem>
                )
            })
             }
            </DropdownButton>
            TO:
            <DropdownButton  
                title= { this.state.to ? this.state.to : 'TO'}
                id='to'
            >
            {
                this.currencyList.map((currencyItem)=>{
                    return ( 
                        <MenuItem 
                            key={currencyItem.id} 
                            onSelect={(eventKey)=>{this.onSelect('to',eventKey)}} 
                            eventKey={currencyItem.id}
                        > 
                            {currencyItem.name}
                        </MenuItem>
                    )
                })
            }
            </DropdownButton>

            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter Amount to Convert"
                onChange={this.handleChange}
            />
            RESULT {this.state.resultValue.toFixed(3)}
            </div>
        );
    }
}
/*
It'll have two dropdowns when we'll select 
Convert From
Convert To
Input Box
Swap
Output
*/