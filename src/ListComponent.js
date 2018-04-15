import React, { Component } from 'react';

//text-decoration: line-through;
export default function ListComponent(props){
    let { highlightText, list } = props;
    return(
        <ul>
        {
        list.map((item,i)=>{
            let {name} = item;
            return highlightText !== '' &&
            name.toLowerCase().indexOf(highlightText) > -1 ?
            <li style={ {textDecoration:'underline'} }  key={i}> 
            {name}
            </li> 
            :  
            <li key={i}>  not selected {name} </li> 
        })
        }
        </ul>
    );
}

