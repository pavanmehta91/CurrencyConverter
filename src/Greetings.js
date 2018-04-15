import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greetings extends Component {
    render(){
        return(
            <h1> Hello {this.props.name} Good {this.props.message} </h1>
        )
    }
}

Greetings.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.oneOf(['Morning', 'Evening','Afternoon','Noon'])
}
Greetings.defaultProps = {
    name: 'Stranger',
    //message: 'Morning'
    
};