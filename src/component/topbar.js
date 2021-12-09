import React from 'react';
import './topbar.css';
import Swal from 'sweetalert2';
export default class Topbar extends React.Component {
    ShowAlert = (title,message,icon) => {
        Swal.fire({title: title, text: message, icon: icon});
    }
    render() {
        return (
            <menu class="menu">
                <li id="nav-home"><a id="nav-home-link" href="/">JS & PY</a></li>
                <li id="nav-sign-in"><a id="nav-sign-in-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant login","error");}}><b>Sign in</b></a></li>
                <li id="nav-posts"><a id="nav-posts-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access posts","error")}}>Posts</a></li>
                <li id="nav-comments"><a id="nav-comments-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access comments","error")}}>Comments</a></li>
                <li id="nav-artists"><a id="nav-artists-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access artists","error")}}>Artists</a></li>
                <li id="nav-tags"><a id="nav-tags-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access tags","error")}}>Tags</a></li>
                <li id="nav-blips"><a id="nav-blips-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access blips","error")}}>Blips</a></li>
                <li id="nav-pools"><a id="nav-pools-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access pools","error")}}>Pools</a></li>
                <li id="nav-sets"><a id="nav-sets-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access sets","error")}}>Sets</a></li>
                <li id="nav-wiki"><a id="nav-wiki-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access wiki","error")}}>Wiki</a></li>
                <li id="nav-forum"><a id="nav-forum-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access forum","error")}}>Forum</a></li>
                <li id="nav-help"><a id="nav-help-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Help Me","Please email me at zhiyan114@zhiyan114.com if you need help","info")}}>Help</a></li>
                <li id="nav-more"><a id="nav-more-link" href="/" onClick={(e)=>{e.preventDefault(); this.ShowAlert("Unavailable","You cant access more","error")}}>More »</a></li>
            </menu>
        )
    }
}