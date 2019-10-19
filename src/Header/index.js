import React from 'react';
import './header.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../Assets/twoly-red-white-circle.png';
import partner from '../Assets/person.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left-container">
                <div className="header-hamburger"><i className="fa fa-bars"></i></div>
                <div className="header-logo"><img src={logo} alt="twoly-logo" /></div>
                <div className="header-brand">Twoly &#60;2</div>
            </div>
            <div className="header-photo-container">
                <div className="header-photo"><img src={partner} alt="twoly-logo" /></div>
            </div>
            <div className="header-right-container">
                <div className="header-time-together">Y: 1 M: 10 D: 7</div>
            </div>
        </div>
    );
}

export default Header;
