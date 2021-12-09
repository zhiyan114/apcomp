import React from 'react';
import Helmet from 'react-helmet';
import HexBody from './Global_Resources/BodyHex.png';
import './404_Resources/404.css';
import Topbar from '../component/topbar';
export default class Error404 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>404 - JS & PY</title>
                    <style>
                        {`
                            body {
                                background-color: #020f23;
                                background-image: url(${HexBody});
                            }
                            
                        `}
                    </style>
                </Helmet>
                <Topbar/>
                <div className="Container404">
                    <h1 className="Title404">404</h1>
                    <h2 className="Subtitle404">Page not found</h2>
                    <p className="Body404">
                        The page you are looking for does not exist. Please check the URL again or go back to the <a href="/">homepage</a>.
                    </p>
                </div>
            </React.Fragment>
        );
    }
}