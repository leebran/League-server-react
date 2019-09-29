import React from 'react'
import Dropdown from './Dropdown'

const CourseBarItem = ({titleChanged, searchText}) =>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"> <Dropdown/> </a>
<div className="collapse navbar-collapse row" id="navbarTogglerDemo03">
    <ul className="navbar-nav form-inline col">
        <li className="nav-item active col">
            <a className="nav-link" href={`/`}>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item col-8">
    <form className="form-inline my-2 my-lg-8">
        <input className="form-control form-control-lg col-8" onChange={titleChanged} type="text" placeholder="Search Summoner Name.." aria-label="Search"/>
        <a href={`/Search/${searchText}`} className="btn form-control-lg btn-outline-success my-2 my-sm-0">
            Search
        </a>
    </form>
        </li>
            <li className="nav-item form-inline col">
                <a className="nav-link" href={`/`}>Login <span className="sr-only">(current)</span></a>
                <a className="nav-link" href="#">Sign Up</a>
            </li>
    </ul>
</div>
</nav>

function grabName() {
    var grabbedName = document.getElementById("summonerName").value();
    return grabbedName;

}
export default CourseBarItem;
