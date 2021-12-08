import React from 'react';
import Helmet from 'react-helmet';
import './Home_Resources/Main.css';
import './Home_Resources/Helper.css';
import './Global_Resources/jquery-ui.css';
import Swal from 'sweetalert2';

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
                        <a href="" onClick={(e)=>{e.preventDefault(); Swal.fire({title:"Bruh",text:"This is a yiff site, to keep this project SFW, I wont redirect you", icon: "warning",confirmButtonText:"Fine Whatever"}); }}>e621</a>
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
                                <input type="submit" value="Search"/>
                                <input type="button" value="Change Mascot" id="change-mascot"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
