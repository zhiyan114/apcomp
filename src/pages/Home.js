import React from 'react';
import Helmet from 'react-helmet';
import './Home_Resources/Main.css';
import Swal from 'sweetalert2';

import zero from './Global_Resources/number/0.png';
import one from './Global_Resources/number/1.png';
import two from './Global_Resources/number/2.png';
import six from './Global_Resources/number/6.png';

export default class Home extends React.Component {
    Messagebox = (title,text,icon) => {
        Swal.fire({title:title,text:text,icon:icon});
    }
    render() {
        return (
        <React.Fragment>
            <Helmet>
                <title>e621</title>
            </Helmet>
            <div id="a-home">
                <div id="searchbox" className="mascotbox">
                    <h1 style={{fontSize: "4em",paddingBottom: "2px", paddingTop:"1.5px"}}>
                        <a href="/" onClick={(e)=>{e.preventDefault(); Swal.fire({title:"Bruh",text:"This is a yiff site, to keep this project SFW, I wont redirect you", icon: "warning",confirmButtonText:"Fine Whatever"}); }}>e621</a>
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
                                <div style={{position:"relative"}}>
                                    <input type="submit" class="smallbtn" value="Search" style={{marginRight:"5px",marginLeft:"-5px"}}/>
                                    <input type="button" class="smallbtn" value="Change Mascot" id="change-mascot" style={{marginRight:"-5px", paddingLeft:"2px",paddingRight:"2px"}}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="mascot_artist">Mascot by <a href="http://www.furaffinity.net/user/keishinkae">Keishinkae</a></div>
                </div>
                <div id="searchbox2" className="mascotbox">
                    <img src={two} alt="2"/>
                    <img src={six} alt="6"/>
                    <img src={one} alt="1"/>
                    <img src={zero} alt="0"/>
                    <img src={two} alt="2"/>
                    <img src={zero} alt="0"/>
                    <img src={one} alt="1"/>
                </div>
                <div id="searchbox3" className="mascotbox">
                    <p style={{marginBottom:"-12px"}}>Serving 2,610,201 posts</p>
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
