import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span>Running IMGSRV - </span>
                <a href="/" onClick={(e)=>{e.preventDefault()}}>Themes / Gestures</a>
                <span> - </span>
                <a href="/" onClick={(e)=>{e.preventDefault()}}>Rules</a>
                <span> - </span>
                <a href="/" onClick={(e)=>{e.preventDefault()}}>Takedowns</a>
                <span> - </span>
                <a href="/" onClick={(e)=>{e.preventDefault()}}>Contact</a>
                <span> - </span>
                <a href="/" onClick={(e)=>{e.preventDefault()}}>Keyboard Shortcuts</a>
                <span> - </span>
                <a href="/" onClick={(e)=>{e.preventDefault()}}>Disable mobile mode support</a>
            </footer>
        )
    }
}