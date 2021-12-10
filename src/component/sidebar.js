import React from 'react';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import Swal from 'sweetalert2'

export default class Sidebar extends React.Component {
    RenderHistory = () => {
        return (this.props.HistoryItems || [{name:"e621",count: '69K'}]).map((item)=>{
            item = (
                <li className="history-item" key={`history_${item.name}_${Math.random()}`}>
                    <a className="wiki-link" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>?</a>
                    <a className="search-inc-tag" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>+</a>
                    <a className="search-inl-tag" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>–</a>
                    <a className="history-tag" rel="nofollow" href={`/main?keyword=${item.name}`}>{item.name}</a>
                    <span className="color-muted">{item.count}</span>
                </li>
            )
            return item
        })
    }
    render() {
        return (
            <aside className="sidebar">
                <section className="search">
                    <h1 style={{marginBottom:"1px"}}>
                        <span>Search</span>
                        <span className="search-help"><a href="/" onClick={(e)=>{e.preventDefault(); Swal.fire({title:"Search Help",text:"Type some keyword to search images using google search API",icon:'info'})}}>(search help)</a></span>
                    </h1>
                    <form action="/main" method="get">
                        <input type="text" id="keyword" name="keyword" defaultValue={this.props.SearchVal || ""}/>
                        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </section>
                <section className="mode">
                    <h1>Mode</h1>
                    <select name="mode" id="mode" onChange={()=>{Swal.fire({title:"Demo Only",text:"This dropdown are for demostration purposes, nothing will happen",icon:"info"})}}>
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
                    <ul className="history-item">
                        {this.RenderHistory()}
                    </ul>
                </section>
                <section className="related">
                    <h1>Related</h1>
                    <ul>
                        <li className="related-item">
                            <a className="wiki-link" rel="nofollow" href="/" onClick={(e)=>{e.preventDefault();}}>Random</a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}