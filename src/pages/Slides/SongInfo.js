import React from 'react';
import Helmet from 'react-helmet';
import HexBody from '../Global_Resources/BodyHex.png';
import Topbar from '../../component/topbar';
import Sidebar from '../../component/sidebar';

import Footer from '../../component/footer';
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
                    <title>Main - History</title>
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
                        <div style={{textAlign:"center"}}>
                            <h1 style={{fontSize:"2rem",marginBottom:"1.5rem"}}>Song Info</h1>
                            <p>In 1949, Country music songwriter Stuart Hamblen was hunting in Texas with a friend when he found a derelict hut 20 miles from the nearest road. Inside, amidst much trash, lay the dead body of an old prospector. Hamblen, deeply moved, wrote the song's lyrics on a sandwich bag. No publisher wanted it so he published it himself. Rosemary Clooney's version sold over 2 million in the US alone and was a transatlantic #1.</p>
                            <h1 style={{fontSize:"2rem",margin:"1.5rem"}}>Description of the significant event</h1>
                            <p>Following more wives moving back into the workforce the economy continued to grow as well as consumer goods and television programme</p>
                        </div>
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}