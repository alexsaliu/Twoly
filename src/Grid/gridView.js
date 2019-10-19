import React, { useState } from 'react';
import moment from 'moment';

const GridView = ({ daySelected }) => {
    const [events, setEvents] = useState(true);
    const [display, setDisplay] = useState(1);

    const date = moment(daySelected).format("DD-MM-YY");
    const day = moment(daySelected).format("ddd");

    return (
        <div className="view-container">
            <div className="view-container-menu">
                <div onClick={() => setDisplay(1)} className={"view-container-menu-button " + (display === 1 ? "event" : "")}>
                    <i className="fa fa-calendar"></i>
                </div>
                <div onClick={() => setDisplay(2)} className={"view-container-menu-button " + (display === 2 ? "surprise" : "")}>
                    <i className="fa fa-heart"></i>
                </div>
                <div onClick={() => setDisplay(3)} className={"view-container-menu-button " + (display === 3 ? "memory" : "")}>
                    <i className="fa fa-folder"></i>
                </div>
            </div>
            <div className="view-container-body">
                <div className="view-container-date">{day} {date}</div>
            {!events ? (
                <div className="view-container-noevents">
                    No activity on this day
                </div>
            ) : (
                <div>
                <div className="view-container-details">
                    Details
                </div>
                <div></div>
                <div></div>
                </div>
            )}
            </div>
        </div>
    );
}

export default GridView;
