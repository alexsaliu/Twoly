import React, { Component } from 'react';
import moment from 'moment';
import Day from './day';
import {initializeCalendarDates} from './helpers';
import './grid.css';

export default class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startWeek: moment().format('YYYY-MM-DD'),
            endWeek: moment().endOf('month').week(),
            date: initializeCalendarDates(moment().format('YYYY-MM-DD'), 84, 84),
        }
    }


    render() {
        return (
            <div className="main-container">
                <div className="view-container">

                </div>
                <div className="grid-container">
                    <div className="grid-header">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>
                    <div className="grid-box">
                        <div className="grid">
                            {this.state.date.map((date, key) =>
                                <Day date={date} key={key} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
