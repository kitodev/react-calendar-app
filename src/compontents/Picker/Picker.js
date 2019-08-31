import React, { Component } from 'react'
import Calendar from 'react-calendar/';
import './Picker.scss';

export default class Picker extends Component {

    state = {
        date: new Date()
    }

    onChange = date => {
        this.setState({
            date : date
        })
    }

    render() {
        return (
            <div>
                <Calendar 
                onChange={this.onChange}
                value={this.state.date} />
            </div>
        )
    }
}