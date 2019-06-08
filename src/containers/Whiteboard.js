import React from 'react';
import TheWidgetList from '../components/TheWidgetList'
import CourseBarItem from "../components/CourseBarItem";
class WhiteBoard extends React.Component {
    render() {
        return (
            <div>
            <h1>Summoners Found:</h1>
            <TheWidgetList/>
            </div>
        )
    }
}
export default WhiteBoard;
