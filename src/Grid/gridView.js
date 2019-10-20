import React, { useState, useEffect } from 'react';
import moment from 'moment';

const GridView = ({ daySelected }) => {

    const [icon, setIcon] = useState(1);
    const [events, setEvents] = useState(["event one", "event 2"]);
    const [surprises, setSurprises] = useState([]);
    const [memories, setMemories] = useState([]);
    const [content, setContent] = useState(events.map((item, key) => <div key={key} className={"view-container-" + "events"}>{item}</div>));

    const date = moment(daySelected).format("DD-MM-YY");
    const day = moment(daySelected).format("ddd");

    // let content = "";

    const displayContent = (type, items) => {
        if (items.length < 1) {
            setContent("No " + type);
            console.log(content);
        }
        else {
            setContent(items.map((item, key) => <div key={key} className={"view-container-" + type}>{item}</div>));
            console.log(content);
        }
    }

    const clickDisplay = (display) => {
        setIcon(display);
        if (display === 1) {
            displayContent("events", events);
            console.log("event 1");
        }
        else if (display === 2) {
            displayContent("surprises", surprises);
            console.log("surprise 2");
        }
        else {
            displayContent("memories", memories);
            console.log("memories 3");
        }

    }

    return (
        <div className="view-container">
            <div className="view-container-menu">
                <div onClick={() => clickDisplay(1)} className={"view-container-menu-button " + (icon === 1 ? "event" : "")}>
                    <i className="fa fa-calendar"></i>
                </div>
                <div onClick={() => clickDisplay(2)} className={"view-container-menu-button " + (icon === 2 ? "surprise" : "")}>
                    <i className="fa fa-heart"></i>
                </div>
                <div onClick={() => clickDisplay(3)} className={"view-container-menu-button " + (icon === 3 ? "memory" : "")}>
                    <i className="fa fa-folder"></i>
                </div>
            </div>
            <div className="view-container-body">
                <div className="view-container-date">{day} {date}</div>
                <div className="view-container-details">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default GridView;
