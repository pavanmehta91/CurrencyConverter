import React, { Component } from 'react';
import ListComponent from './ListComponent';

export default class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            groceryList:  [{
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
    filterList = (e) => {
      let filterText = e.target.value;
      this.setState({
          filterText: filterText.toLowerCase()
      });
    }
    render(){
        // let newGroceryList = this.state.groceryList.filter((groceryItem)=>{
        //     return groceryItem.name.toLowerCase()
        //                       .indexOf(this.state.filterText) > -1;
        // });
        return(
            <div>
                <input onChange={this.filterList} type="text" placeholder="search the list" />
                <ListComponent  
                    highlightText={this.state.filterText}
                    list={this.state.groceryList} 
                />
             </div>
        )
    }
}