import React from 'react';
import Helmet from 'react-helmet';
import HexBody from './Global_Resources/BodyHex.png';
import Topbar from '../component/topbar';
import Sidebar from '../component/sidebar';
import './Main_Resources/Main.css';

import Footer from '../component/footer';
import Swal from 'sweetalert2';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Keyword: "",
            SearchHistory: []
        }
    }
    componentDidMount() {
        let keyword = new URLSearchParams(window.location.search).get("keyword") || "";
        let SearchHistory = (JSON.parse(localStorage.getItem("SearchHistory")) || []);
        let count = 0;
        if(!/\S/.test(keyword)) {
            SearchHistory = SearchHistory.map(item=>{
                count++;
                return {
                    name: item,
                    count: count
                }
            });
            this.setState({
                Keyword: keyword,
                SearchHistory: SearchHistory
            });
            Swal.fire({
                title:"Invalid Search Field",
                text:"Your search field cannot be empty nor whitespace",
                icon:"error"
            });
            return;
        }
        switch(SearchHistory.length) {
            case 10:
                SearchHistory.pop();
                SearchHistory.splice(0,0,keyword);
                break;
            default:
                SearchHistory.splice(0,0,keyword);
                break;
        }
        localStorage.setItem("SearchHistory",JSON.stringify(SearchHistory));
        SearchHistory = SearchHistory.map(item=>{
            count++;
            return {
                name: item,
                count: count
            }
        });
        this.setState({
            Keyword: keyword,
            SearchHistory: SearchHistory
        });
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
                    <Sidebar SearchVal={this.state.Keyword} HistoryItems={this.state.SearchHistory}/>
                    <section className="content">
                        <p>Content</p>
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}