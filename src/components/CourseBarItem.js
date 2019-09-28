import React from 'react'
import Dropdown from './Dropdown'

const CourseBarItem = ({titleChanged, searchText}) =>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"> <Dropdown/> </a>
<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <a className="nav-link" href={`/`}>Home <span className="sr-only">(current)</span></a>
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-1">
        <input className="form-control my-lg-1" onChange={titleChanged} type="search" placeholder="Search Summoner Name.." aria-label="Search"/>
        <a href={`/Search/${searchText}`} className="btn btn-outline-success my-2 my-sm-0">
            Search
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href={`/`}>Login <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
            </li>
        </ul>
    </form>
</div>
</nav>

function grabName() {
    var grabbedName = document.getElementById("summonerName").value();
    return grabbedName;

}
export default CourseBarItem;
