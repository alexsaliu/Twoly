import React { useState } from 'react';

const Add = () => {

    const [type, setType] = useState("");

    return (
        <div className="addtogrid-container">
            <div className="addtogrid-overlay"></div>
            <div className="addtogrid-box">
                <div className="addtogrid-content">
                    <div className="addtogrid-title">Add</div>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Add;
