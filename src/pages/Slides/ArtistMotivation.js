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
                            <h1 style={{fontSize:"2rem",marginBottom:"1.5rem"}}>Reflection</h1>
                            <p>
                            It had a religional meaning, about death.
In the subsequent verses, the narrator uses various parts of a typical building including window panes, hinges and floor as metaphors to explain how this “house” is overly faulty and no longer functional. The narrator concludes by emphasizing the fact that this body is no more useful. He mentions meeting the saints to depict how people believe that the soul and spirit of a person leaves the mortal body to go to heaven when a person dies.
                            </p>
                            <h1 style={{fontSize:"2rem",margin:"1.5rem"}}>Artist's Motivation</h1>
                            <p>
                            Stuart tells people “The story: A friend of mine and myself were hunting up in the High Sierras. We found a little old cabin that had almost been demolished by a wild storm. The only living thing around it was a starving old hound dog. In the back room we found a little old prospector that had cashed in his blue chips.”
"Later on, riding down the canyon, with the old hound dog on the pommel of my saddle, taking him into shelter and to food, I got to thinking."This old house, the ones made of wood and steel, shall all come down. And this old house of mine, made of clay, it's got to go too - but there's a big difference. Although the wooden house, the steel house, or brick house may be scattered in the winds of a wild storm and its debris scattered over the hillside, this clay house in which I live shall be scattered too. But . . . the soul inside shall, in God's own good time, be gathered with the saints.
                            </p>
                        </div>
                        
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}