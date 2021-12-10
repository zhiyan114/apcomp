import React from 'react';
import Helmet from 'react-helmet';
import HexBody from './Global_Resources/BodyHex.png';
import Topbar from '../component/topbar';
import Sidebar from '../component/sidebar';
import './Main_Resources/Main.css';

import Footer from '../component/footer';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.location);
        this.Keyword = new URLSearchParams(window.location.search).get("keyword");
    }
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
                    <Sidebar SearchVal={this.Keyword} HistoryItems={[{name:"TEST", count:"100K"}]}/>
                    <section className="content">
                        <p>Content</p>
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}