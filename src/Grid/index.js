import React, { Component } from 'react';
import moment from 'moment';
import Day from './day';
import GridView from './gridView';
import {initializeCalendarDays, loadMoreDates} from './helpers';
import './grid.css';

export default class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            today: moment().format('YYYY-MM-DD'),
            dates: initializeCalendarDays(moment().format('YYYY-MM-DD'), 84, 84),
            firstDate: "",
            lastDate: "",
            weekDay: moment().format('ddd'),
            daySelected: moment().format('YYYY-MM-DD'),
            gridBoxHeight: 0,
            dateBeforePastDatesLoad: initializeCalendarDays(moment().format('YYYY-MM-DD'), 84, 84)[0],
        }
        this.scrollRef = React.createRef();
        this.pastDatesScrollRef = React.createRef();
        this.gridBox = React.createRef();
        this.grid = React.createRef();

        this.gridHeight = "";
        this.maintainScrollPosition = false;
    }

    loadDays = (e) => {
        const scrolled = e.target.scrollHeight - e.target.scrollTop;
        if (scrolled >= this.gridHeight + 50) {
            const dates = [];
            dates.push(...loadMoreDates(this.state.firstDate, 84));
            dates.push(...this.state.dates);
            const dateBeforePastDatesLoad = this.state.dates[0];
            this.setState({ dateBeforePastDatesLoad }, () => console.log(this.state.dateBeforePastDatesLoad));
            const firstDate = moment(this.state.firstDate).subtract(84, 'days').format('YYYY-MM-DD');
            this.setState({ firstDate });
            this.setState({ dates }, () => console.log("DATES: ", dates));
            this.maintainScrollPosition = true;
        }
        else if (scrolled <= this.state.gridBoxHeight + 50) {
            const dates = [];
            dates.push(...this.state.dates);
            dates.push(...loadMoreDates(this.state.lastDate, 84));
            this.setState({dateBeforePastDatesLoad: ""});
            const lastDate = moment(this.state.lastDate).add(84, 'days').format('YYYY-MM-DD');
            this.setState({ lastDate });
            this.setState({ dates }, () => console.log(dates));
        }
    }

    adjustGridHeight = () => {
        const gridHeight = this.grid.current.clientHeight;
        this.gridHeight = gridHeight;
        console.log("GRID HEIGHT UPDATE: ", this.gridHeight);
    }

    dayClicked = (daySelected) => {
        this.setState({ daySelected });
    }

    componentDidMount() {
        this.adjustGridHeight();
        this.scrollRef.current.scrollIntoView();
        const gridBoxHeight = this.gridBox.current.clientHeight;
        this.setState({ gridBoxHeight }, () => console.log(this.state.gridBoxHeight));
        const firstDate = this.state.dates[0];
        console.log("first date: ", firstDate);
        const lastDate = this.state.dates[this.state.dates.length - 1];
        this.setState({ firstDate }, () => console.log("firstDate: ", this.state.firstDate));
        this.setState({ lastDate }, () => console.log("lastDate: ", this.state.lastDate));
    }

    componentDidUpdate() {
        console.log("Component Updated!!!!");
        if (this.maintainScrollPosition) {
            this.pastDatesScrollRef.current.scrollIntoView();
            this.maintainScrollPosition = false;
        }
        this.adjustGridHeight();
    }

    render() {
        const { dates, today, daysOfWeek, weekDay, dateBeforePastDatesLoad, daySelected } = this.state;
        return (
            <div className="main-container">
                <GridView
                    daySelected={daySelected}
                />
                <div className="grid-container">
                    <div className="grid-header">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, key) =>
                            <div className={day === weekDay? "grid-header-today" : ""} key={key}>{day}</div>
                        )}
                    </div>
                    <div ref={this.gridBox} className="grid-box" onScroll={this.loadDays}>
                        <div ref={this.grid} className="grid">
                            <div className="grid-loader">Loading...</div>
                            {dates.map((date, key) =>
                                <div key={key} ref={date === today ? this.scrollRef : date === dateBeforePastDatesLoad ? this.pastDatesScrollRef : ""} className={"day-container " + (date === dateBeforePastDatesLoad ? "date-before-load" : "")}>
                                    <Day
                                        daySelected={date === daySelected ? "" : this.dayClicked}
                                        date={date}
                                        key={key}
                                    />
                                </div>
                            )}
                            <div className="grid-loader">Loading...</div>
                        </div>
                        <div className="grid-footer-spacer"></div>
                    </div>
                </div>
            </div>
        )
    }
}
