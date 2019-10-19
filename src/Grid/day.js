import React from 'react';
import moment from 'moment';

const Day = ({ date, daySelected }) => {
    const splitDate = date.split('-');
    const firstOfMonth = Number(splitDate[2]) === 1 ? moment().month(parseInt(splitDate[1] - 1)).format("MMM") : "";
    return (
        <div
            onClick={() => typeof(daySelected) === 'function' ? daySelected(date) : ""}
            className={"day " + (moment().format("YYYY-MM-DD") === date ? "today " : "")
            + (typeof(daySelected) === 'function' ? "" : "day-selected")}
        >
            <div className="day-date">{firstOfMonth ? <div>{firstOfMonth}</div> : splitDate[2]}</div>
        </div>
    );
};

export default Day;
