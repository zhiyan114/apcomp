import React from 'react';
import Helmet from 'react-helmet';
import Swal from 'sweetalert2';
import './Home_Resources/Main.css';

import zero from './Global_Resources/number/0.png';
import two from './Global_Resources/number/2.png';
import four from './Global_Resources/number/4.png';
import six from './Global_Resources/number/6.png';
import nine from './Global_Resources/number/9.png';
import mascot_list from './Home_Resources/mascot_list.json';

function RandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        document.body.className = "Homebody";
        this.CurrentMascotID = RandInt(0, mascot_list.length - 1);
        this.state = {
            mascot_data: mascot_list[this.CurrentMascotID],
        };
    }
    SetMascot = () => {
        switch(this.CurrentMascotID) {
            case (mascot_list.length - 1):
                this.CurrentMascotID = 0;
                break;
            default:
                this.CurrentMascotID++;
                break;
        }
        this.setState({ mascot_data: mascot_list[this.CurrentMascotID] });
    }
    Messagebox = (title,text,icon) => {
        Swal.fire({title:title,text:text,icon:icon});
    }
    render() {
        return (
        <React.Fragment>
            <Helmet>
                <title>e621</title>
                
                <style>
                    {`
                        body {
                            background-image: url(${this.state.mascot_data.imgurl});
                        }
                    `}
                </style>
            </Helmet>
            <div id="a-home">
                <div id="searchbox" className="mascotbox">
                    <h1 style={{fontSize: "4em",paddingBottom: "2px", paddingTop:"1.5px"}}>
                        <a href="/" onClick={(e)=>{e.preventDefault();}}>JS & PY</a>
                    </h1>
                    <div id="links">
                        <a title="Login or sign up" href="https://e621.net/session/new" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Authentication Method Unavailable","error")}}>Login/Signup</a>
                        <a title="A paginated list of every post" href="https://e621.net/posts" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Post Method Unavailable","error")}}>Posts</a>
                        <a title="A paginated list of every comment" href="https://e621.net/comments" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Comment Method Unavailable","error")}}>Comments</a>
                        <a title="A paginated list of every tag" href="https://e621.net/tags" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Tag Method Unavailable","error")}}>Tags</a>
                        <a title="Wiki" href="https://e621.net/wiki_pages" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Wiki Method Unavailable","error")}}>Wiki</a>
                        <a title="Forum" href="https://e621.net/forum_topics" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Forum Method Unavailable","error")}}>Forum</a>
                        <a title="A site map" href="https://e621.net/static/site_map" onClick={(e)=>{e.preventDefault(); this.Messagebox("Unavailable","Site Map Method Unavailable","error")}}>»</a>
                    </div>
                    <div>
                        <form action="https://e621.net/posts" acceptCharset="UTF-8" method="get">
                            <div>
                                <input type="text" name="tags" id="tags" defaultValue="" size="30" autoFocus="autofocus" autoComplete="off"/><br/>
                                <input type="submit" value="Search" style={{marginRight:"5px",marginLeft:"-5px"}}/>
                                <input type="button" value="Change Mascot" id="change-mascot" style={{marginRight:"-5px", paddingLeft:"2px",paddingRight:"2px"}} onClick={this.SetMascot}/>
                            </div>
                        </form>
                    </div>
                    <div id="mascot_artist">Mascot by <a href={this.state.mascot_data.author.profile}>{this.state.mascot_data.author.name}</a></div>
                </div>
                <div id="searchbox2" className="mascotbox">
                    <img src={six} alt="6"/>
                    <img src={nine} alt="9"/>
                    <img src={four} alt="4"/>
                    <img src={two} alt="2"/>
                    <img src={zero} alt="0"/>
                </div>
                <div id="searchbox3" className="mascotbox">
                    <p style={{marginBottom:"-12px"}}>Serving 69,420 posts</p>
                    <p style={{ marginBottom:"1px"}}>
                        <br/>
                        <a title="Takedown Information" href="/" onClick={(e)=>{e.preventDefault(); Swal.fire({title: "Nah",text: "This is some fair use stuff, DMCA aint workin here",icon: "error"})}}>Takedown Policy and Process</a>
                        <span> | </span>
                        <a title="Contact Us" href="/" onClick={(e)=>{e.preventDefault(); Swal.fire({title: "Help Me", html: `If you need help, contact me via email: <a href="mailto:zhiyan114@zhiyan114.com">zhiyan114@zhiyan114.com</a>`,icon:"info"})}}>Contact Us</a>
                        <span> | </span>
                        <a title="Terms of Service" href="/" onClick={(e)=>{e.preventDefault(); Swal.fire({title: "Terms of Condition", text: "By accessing this site, you acknowledge to only use it for any legal purposes",icon:"info"})}}>Terms of Service</a>
                    </p>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
