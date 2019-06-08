import React from 'react'
import WidgetService from '../services/WidgetService';
import LeagueName from './LeagueName'

export default class TheWidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.widgetService = new WidgetService();
        this.state = {widgets: []};
    }
    componentDidMount() {
        this.widgetService.findAllWidgets()
            .then(widgets =>
                this.setState({widgets: widgets}));
    }
    render() {
        return(
            this.state.widgets.map(widget =>
                <div>
                    <a href={`/User/${widget.name}`}>{widget.name}</a>
                </div>)
        )
    }}
