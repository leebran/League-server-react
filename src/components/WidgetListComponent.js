import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";
import WidgetListItemComponent from "./WidgetListItemComponent";

class WidgetListComponent extends React.Component {//({widgets, deleteWidget, createWidget, updateWidget}) =>//extends React.Component{
    constructor(props) {
        super(props)
        this.props.loadWidgets();
    }
    state = {
        editing: false
    }
    toggleEditing() {
        this.setState({
            editing: !this.state.editing
        })
    }
    render() {
        return(
            <ul>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                            <WidgetListItemComponent
                                widget={widget}
                                deleteWidget={this.props.deleteWidget}
                                updateWidget={this.props.updateWidget}
                                loadWidgets={this.props.loadWidgets}
                            />

                    )
                }
                <li>
                    <button onClick={this.props.createWidget}>
                        Add
                    </button>
                </li>
            </ul>
        )
    }
}

export default WidgetListComponent
