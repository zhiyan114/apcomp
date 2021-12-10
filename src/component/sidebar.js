import React from 'react';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import Swal from 'sweetalert2'

export default class Sidebar extends React.Component {
    RenderHistory = () => {
        const ulist = <li class="history-item"/>
        const items = this.props.HistoryItems || [{}]
        return (
            <ul>
                        <li class="history-item">
                            <a class="wiki-link" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>?</a>
                            <a class="search-inc-tag" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>+</a>
                            <a class="search-inl-tag" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>–</a>
                            <a class="history-tag" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>a</a>
                            <span class="color-muted">0</span>
                        </li>
                    </ul>
        )
    }
    render() {
        return (
            <aside className="sidebar">
                <section className="search">
                    <h1>
                        <span style={{paddingBottom:"10px"}}>Search</span>
                        <span className="search-help"><a href="/" onClick={(e)=>{e.preventDefault();}}>(search help)</a></span>
                    </h1>
                    <form action="/main" method="get">
                        <input type="text" id="keyword" name="keyword" />
                        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </section>
                <section className="mode">
                    <h1>Mode</h1>
                    <select name="mode" id="mode" onChange={()=>{Swal.fire({title:"Demo Only",text:"This textbox are for demostration purposes, nothing will happen",icon:"info"})}}>
                        <option>View</option>
                        <option>Edit</option>
                        <option>Favorite</option>
                        <option>Unfavorite</option>
                        <option>Add To Set</option>
                        <option>Remove From Set</option>
                    </select>
                </section>
                <section className="history">
                    <h1>History</h1>
                    {this.RenderHistory()}
                </section>
                <section className="related">
                    <h1>Related</h1>
                    <ul>
                        <li class="related-item">
                            <a class="wiki-link" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>Random</a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}