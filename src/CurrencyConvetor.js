import React from "react";

export default class CurrencyConvetor extends React.Component {
  constructor(props) {
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
      convertedValue: 1
    };
  }
  convert = () => {

    var from = this.state.from,
      to = this.state.to,
      val = this.state.value,
      API = `https://api.fixer.io/latest?base=${from}&symbols=${from},${to}`;
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ convertedValue: data["rates"][to] * val });
      });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Amount"
          value={this.state.value}
          onChange={e => {
            this.setState({ value: +e.target.value });
          }}
        />
        <div>
          FROM:
          <select
            onChange={e => {
              this.setState({ from: e.target.value });
            }}
            value={this.state.from}
          >
            {this.currencyList.map(item => {
              return <option value={item.id}>{item.name} </option>;
            })}
          </select>
        </div>
        <div>
          TO:
          <select
            onChange={e => {
              this.setState({ to: e.target.value });
            }}
            value={this.state.to}
          >
            {this.currencyList.map(item => {
              return <option value={item.id}> {item.name} </option>;
            })}
          </select>
        </div>
        <button onClick={this.convert}>Result</button>
        <br />
        Converted Value: {this.state.convertedValue.toFixed(2)}
      </div>
    );
  }
}
