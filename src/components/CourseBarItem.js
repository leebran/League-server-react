import React from 'react'
import Dropdown from './Dropdown'

const CourseBarItem = ({titleChanged, createCourse}) =>
    <nav className="navbar navbar-light bg-light">
        <Dropdown/>
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="CourseTitle" placeholder="Summoner Name.."
                           aria-label="Add"/>
                    <a href={`/Search/im getting`} className="btn btn-outline-success my-2 my-sm-0">
                        Search
                    </a>
                </form>
            </nav>
        </div>
    </nav>

export default CourseBarItem;
