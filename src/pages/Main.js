import React from 'react';
import Helmet from 'react-helmet';
import HexBody from './Global_Resources/BodyHex.png';
import Topbar from '../component/topbar';
import './Main_Resources/Main.css';

import Footer from '../component/footer';
export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Main - IMGSRV</title>
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
                <div className="mainpage">
                    <p>Container Stuff</p>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}