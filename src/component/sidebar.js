import React from 'react';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <section className="search">
                    <h1>
                        <span>Search</span>
                        <span className="search-help"><a href="/" onClick={(e)=>{e.preventDefault();}}>(search help)</a></span>
                    </h1>
                    <form action="/main" method="get">
                        <input type="text" id="keyword" name="keyword" />
                        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </section>
            </aside>
        )
    }
}