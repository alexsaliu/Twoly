import React, { Component } from 'react';
import moment from 'moment';

export default class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startWeek: moment().add(7, 'days').format('dddd, YYYY MM DD'),
            endWeek: moment().endOf('month').week(),
        }
    }



    render() {
        return (
            <div>
                Start week
                {this.state.startWeek}
                End Week
                {this.state.endWeek}
            </div>
        )
    }
}
