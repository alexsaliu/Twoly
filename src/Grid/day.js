import React from 'react';
import moment from 'moment';

const Day = ({ date, daySelected }) => {
    const splitDate = date.split('-');
    return (
        <div
            onClick={() => typeof(daySelected) === 'function' ? daySelected(date) : ""}
            className={"day " + (moment().format("YYYY-MM-DD") === date ? "today " : "")
            + (typeof(daySelected) === 'function' ? "" : "day-selected")}
        >
            <div className="day-date">{splitDate[2] + "-" + splitDate[1]}</div>
        </div>
    );
};

export default Day;
