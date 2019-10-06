import React, { useState } from 'react';
import moment from 'moment';

const GridView = ({ daySelected }) => {
    const [events] = useState("ok");

    const date = moment(daySelected).format("DD-MM-YYYY");
    const day = moment(daySelected).format("dddd");
    return (
        <div className="view-container">
            <div className="view-container-date">
                {day} {date}
            </div>
            <div className="view-container-body">
            {events === "ok" ? (
                <div className="view-container-add-display">
                    <div onClick={() => console.log("Add button clicked")} className="view-container-add">
                        <i class="fa fa-heart"></i>
                        <div className="view-container-add-instruction">Tap to add event</div>
                    </div>
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
