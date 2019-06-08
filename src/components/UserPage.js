import React from 'react'
import WidgetService from '../services/WidgetService';
import LeagueName from './LeagueName'

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.userName = props.match.params.userName;
        this.widgetService = new WidgetService();
        this.state = {widgets: []};
    }
    componentDidMount() {
        this.widgetService.findAllWidgets()
            .then(widgets =>
                this.setState({widgets: this.widgetService
                        .findWidgetByUser(this.userName, widgets)}));
    }
    componentDidMount() {
        this.widgetService.findAllWidgets()
            .then(widgets =>
                this.setState({widgets: widgets}));
    }
    render() {
        return(
            this.state.widgets.map(widget => {
                if (widget.name == this.userName) {
                    return(
                        <div>
                            <h1>{widget.name}</h1>
                            <h3>Level:{widget.level}</h3>
                            <h3>games played:{widget.gamesPlayed}</h3>
                        </div>)
                }
            }
        ))
    }}

export default UserPage;
