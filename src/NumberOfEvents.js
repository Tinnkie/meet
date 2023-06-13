import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    constructor() {
        super();
        this.state = {
          query: 32,
          errorText: "",
        };
      }

    handleNumberChange = (event) => {
        const minValue = 1; 
        const maxValue = 32; 
        let inputValue = parseInt(event.target.value);
        if (inputValue < minValue || inputValue > maxValue) {
            // this.setState({errorText:"Please select a value between " + minValue + " and " + maxValue})
            this.props.notify("Please select a value between " + minValue + " and " + maxValue)
        }
        else {
            this.props.updateEvents(null, inputValue);
            this.setState({ query: inputValue }); 
            this.setState({errorText:""})
        }
    };

    render() {
        return (
            <div className='NumberOfEvents'>
                <h3>number of events:</h3>
                <input
                    id='number-of-events'
                    type='number'
                    className='number'
                    value={this.state.query} 
                    onChange={this.handleNumberChange}  
                    min='0'
                />
                <ErrorAlert className='errorMessage' text={this.state.errorText} />
            </div>
        );
    }

}

export default NumberOfEvents;
