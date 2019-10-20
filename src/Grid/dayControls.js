import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const DayControls = ({ daySelected }) => {
    return (
        <div className="day-controls">

            <div className="day-button" onClick={() => console.log(daySelected)}>
                <div className="day-button-icon day-button-event">
                <div className="day-button-icon-inner">
                    <i className="fa fa-calendar"></i>
                </div>
                </div>
                <div className="day-button-text-container">
                    <div className="day-button-text">Event</div>
                </div>
            </div>
            <div className="day-button" onClick={() => console.log(daySelected)}>
                <div className="day-button-icon day-button-surprise">
                <div className="day-button-icon-inner">
                    <i className="fa fa-heart"></i>
                </div>
                </div>
                <div className="day-button-text-container">
                    <div className="day-button-text">Surprise</div>
                </div>
            </div>
            <div className="day-button" onClick={() => console.log(daySelected)}>
                <div className="day-button-icon day-button-memory">
                    <div className="day-button-icon-inner">
                        <i className="fa fa-folder"></i>
                    </div>
                </div>
                <div className="day-button-text-container">
                    <div className="day-button-text">Memory</div>
                </div>
            </div>
        </div>
    );
};

export default DayControls;
