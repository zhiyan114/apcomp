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
                            <h1 style={{fontSize:"2rem",marginBottom:"1.5rem"}}>Credits</h1>
                            <ul style={{listStyle: "none"}}>
                                <li style={{marginBottom:"0.5rem"}}><a href="https://archive.jsonline.com/entertainment/musicandnightlife/82431457.html/" target="_blank">jsonline</a></li>
                                <li style={{marginBottom:"0.5rem"}}><a href="https://www.latimes.com/archives/la-xpm-1988-12-30-ca-1053-story.html" target="_blank">latimes</a></li>
                                <li style={{marginBottom:"0.5rem"}}><a href="https://www.songmeaningsandfacts.com/this-ole-house-by-shakin-stevens/" target="_blank">Song meanings and Facts</a></li>
                                <li style={{marginBottom:"0.5rem"}}><a href="https://www.songfacts.com/facts/rosemary-clooney/this-ole-house" target="_blank">Songfacts</a></li>
                                <li><a href="https://genius.com/Stuart-hamblen-this-ole-house-lyrics" target="_blank">Genius Lyrics</a></li>
                            </ul>
                        </div>
                        
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}