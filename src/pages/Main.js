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
    RenderImage(kword) {
        const demo_stuff = [
            {
                title: "Test",
                imgurl: "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                contexturl: "https://www.google.com/search?q=test"
            },
            {
                title: "Test2",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test2"
            },
            {
                title: "Test3",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test3"
            },
            {
                title: "Test4",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test4"
            },
            {
                title: "Test5",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test5"
            },
            {
                title: "Test6",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test6"
            },
            {
                title: "Test7",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test7"
            },
            {
                title: "Test8",
                imgurl: "https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg",
                contexturl: "https://www.google.com/search?q=test8"
            },
        ]
        if(!/\S/.test(kword)) {
            return []
        }
        const columns_to_render = [];
        demo_stuff.forEach((item,index)=>{
            columns_to_render.push(
                <div className="main-column" key={"column_"+index}>
                    <a href={item.contexturl} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <br/>
                    <Zoom>
                        <img src={item.imgurl} alt={item.title} width="100%"/>
                    </Zoom>
                </div>
            );
        });
        return columns_to_render;

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
                            {this.RenderImage(this.state.Keyword)}
                        </div>
                    </section>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}