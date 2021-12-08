import React from 'react';
import Helmet from 'react-helmet';
import './Home_Resources/Main.css';
import Swal from 'sweetalert2';

import zero from './Global_Resources/number/0.png';
import one from './Global_Resources/number/1.png';
import two from './Global_Resources/number/2.png';
import six from './Global_Resources/number/6.png';

export default class Home extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Helmet>
                <title>e621</title>
            </Helmet>
            <div id="a-home">
                <div id="searchbox" className="mascotbox">
                    <h1 style={{fontSize: "4em"}}>
                        <a href="/" onClick={(e)=>{e.preventDefault(); Swal.fire({title:"Bruh",text:"This is a yiff site, to keep this project SFW, I wont redirect you", icon: "warning",confirmButtonText:"Fine Whatever"}); }}>e621</a>
                    </h1>
                    <div id="links">
                        <a title="Login or sign up" href="https://e621.net/session/new">Login/Signup</a>
                        <a title="A paginated list of every post" href="https://e621.net/posts">Posts</a>
                        <a title="A paginated list of every comment" href="https://e621.net/comments">Comments</a>
                        <a title="A paginated list of every tag" href="https://e621.net/tags">Tags</a>
                        <a title="Wiki" href="https://e621.net/wiki_pages">Wiki</a>
                        <a title="Forum" href="https://e621.net/forum_topics">Forum</a>
                        <a title="A site map" href="https://e621.net/static/site_map">»</a>
                    </div>
                    <div>
                        <form action="https://e621.net/posts" acceptCharset="UTF-8" method="get">
                            <div>
                                <input type="text" name="tags" id="tags" defaultValue="" size="30" autoFocus="autofocus" data-autocomplete="tag-query" className="ui-autocomplete-input" autoComplete="off"/><br/>
                                <input type="submit" value="Search" style={{margin:"5px"}}/>
                                <input type="button" value="Change Mascot" id="change-mascot"/>
                            </div>
                        </form>
                    </div>
                    <div id="mascot_artist">Mascot by <a href="http://www.furaffinity.net/user/keishinkae">Keishinkae</a></div>
                </div>
                <div id="searchbox2" class="mascotbox">
                    <img src={two}/>
                    <img src={six}/>
                    <img src={one}/>
                    <img src={zero}/>
                    <img src={two}/>
                    <img src={zero}/>
                    <img src={one}/>
                </div>
                <div id="searchbox3" class="mascotbox">
                    <p>
                        Serving 2,610,201 posts<br/>
                        <a title="Takedown Information" href="https://e621.net/static/takedown">Takedown Policy and Process</a>
                        |
                        <a title="Contact Us" href="https://e621.net/static/contact">Contact Us</a> |
                        <a title="Terms of Service" href="https://e621.net/static/terms_of_service">Terms of Service</a>
                    </p>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
