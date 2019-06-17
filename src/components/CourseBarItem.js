import React from 'react'
import Dropdown from './Dropdown'
import WhiteBoard from "../containers/Whiteboard";

const CourseBarItem = ({titleChanged, searchText}) =>
    <nav className="navbar navbar-light bg-light">
        <Dropdown/>
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2"
                           onChange={titleChanged}
                           placeholder="Summoner Name.."
                           aria-label="Add"/>
                    <a href={`/Search/${searchText}`} className="btn btn-outline-success my-2 my-sm-0">
                        Search
                    </a>
                </form>
            </nav>
        </div>
    </nav>

function grabName() {
    var grabbedName = document.getElementById("summonerName").value();
    return grabbedName;

}
export default CourseBarItem;
