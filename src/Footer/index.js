import React, {Component} from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 2
        }
    }

    changeSelected = (button) => {
        this.setState({selected: button});
    }

    render() {
        const { selected } = this.state;
        return (
            <div className="footer">
                <div onClick={() => this.changeSelected(0)} className={"footer-button " + (selected === 0 ? "footer-button-selected" : "")}><i className="fa fa-question-circle"></i></div>
                <div className="footer-button footer-button-inactive"><i className="fa fa-comment"></i></div>
                <div onClick={() => this.changeSelected(2)} className={"footer-button " + (selected === 2 ? "footer-button-selected" : "")}><i className="fa fa-calendar"></i></div>
                <div className="footer-button footer-button-inactive"><i className="fa fa-heart"></i></div>
                <div className="footer-button footer-button-inactive"><i className="fa fa-trophy"></i></div>
            </div>
        );
    }
}
