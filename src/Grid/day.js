import React from 'react';
import moment from 'moment';

const Day = ({date}) => {
    const splitDate = date.split('-');
    return (
        <div className={"day " + (moment().format("YYYY-MM-DD") === date ? "today" : "")}>

            <div className="day-date">{splitDate[2] + "-" + splitDate[1]}</div>
        </div>
    );
};

export default Day;
