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
                            <h1 style={{fontSize:"2rem",marginBottom:"1.5rem"}}>Music/Lyrics</h1>
                        </div>
                        <div className="main-container">
                            <div className="main-column">
                                <h1 style={{marginBottom:"1rem"}}>Youtube Video of the music</h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/nstn4Wscl1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="main-column">
                                <h1 style={{marginBottom:"1rem"}}>Song's Lyrics</h1>
                                <p style={{wordBreak:"break-all",whiteSpace:"normal",width:"100%"}}>
                                This ole house once knew his children
This ole house once knew his wife
This ole house was home and comfort
As they fought the storms of life
This old house once rang with laughter
This old house heard many shouts
Now he trembles in the darkness
When the lightnin' walks about

Ain't a-gonna need this house no longer
Ain't a-gonna need this house no more
Ain't got time to fix the shingles
Ain't got time to fix the floor
Ain't got time to oil the hinges
Nor to mend the windowpane
Ain't a-gonna need this house no longer
He's a-gettin' ready to meet the saints

This ole house is a-gettin' shaky
This ole house is a-gettin' old
This ole house lets in the rain
This ole house lets in the cold
On his knees are a-gettin' chilly
But he feel no fear or pain
'Cause he see an angel peekin'
Through a broken windowpane

Ain't a-gonna need this house no longer
Ain't a-gonna need this house no more
Ain't got time to fix the shingles
Ain't got time to fix the floor
Ain't got time to oil the hinges
Nor to mend the windowpane
Ain't a-gonna need this house no longer
He's a-gettin' ready to meet the saints





This ole house is afraid of thunder
This ole house is afraid of storms
This ole house just groans and trembles
When the night wind flings its arms
This ole house is gettin' feeble
This old house is needin' paint
Just like him it's tuckered out
But he's a-gettin' ready to meet the saints

Ain't a-gonna need this house no longer
Ain't a-gonna need this house no more
Ain't got time to fix the shingles
Ain't got time to fix the floor
Ain't got time to oil the hinges
Nor to mend the windowpane
Ain't a-gonna need this house no longer
He's a-gettin' ready to meet the saints 
ready to meet the saints
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}