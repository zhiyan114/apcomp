import React from 'react';
import Helmet from 'react-helmet';
import HexBody from './Global_Resources/BodyHex.png';
import Topbar from '../component/topbar';
import Sidebar from '../component/sidebar';
import './Main_Resources/Main.css';

import Footer from '../component/footer';
import Swal from 'sweetalert2';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Keyword: "",
            SearchHistory: [],
            ImageLists: []
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
        // POST Request to /api/search
        let CancelSignal = new AbortController();
        fetch("/api/search",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                keyword: keyword
            }),
            signal: CancelSignal.signal,
        }).then(res=>res.json()).then(res=>{
            if(res.status === "success") {
                this.setState({
                    ImageLists: res.data
                });
                CancelSignal = null;
            } else {
                Swal.fire({
                    title:"Error",
                    text:"Unable to perform image search",
                    icon:"error"
                });
                CancelSignal = null;
            }
        }).catch(err=>{
            Swal.fire({
                title:"Error",
                text:"Unable to perform image search",
                icon:"error"
            });
            CancelSignal = null;
        });
        setTimeout(()=>{
            if(CancelSignal) {
                CancelSignal.abort();
                Swal.fire({
                    title:"Timeout",
                    text:"The search request has timed out for 10 seconds. Please try again.",
                    icon:"error"
                });
            }
        },10000);
    }
    RenderImage(data) {
        return data.map(item=>{
            return (
                <div className="main-column" key={"column_"+Math.random()}>
                    <a href={item.contexturl} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <br/>
                    <Zoom>
                        <img src={item.imgurl} alt={item.title} width="100%"/>
                    </Zoom>
                </div>
            )
        })
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
                        <div className="main-container">
                            {this.RenderImage(this.state.ImageLists)}
                        </div>
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}