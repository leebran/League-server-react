import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

class WidgetListItemComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.loadWidgets();
    }

    state = {
        editing: false
    }

    toggleEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {

        return(
        <li key={this.props.widget.id}>
            {this.state.editing &&
            <span>
        <select
            onChange={(event) => this.props.updateWidget({...this.props.widget, type: event.target.value})}
            value={this.props.widget.type}>
            <option value="HEADING">Heading</option>
            <option value="PARAGRAPH">Paragraph</option>
            <option value="IMAGE">Image</option>
            <option value="LIST">List</option>
            <option value="LINK">Link</option>
        </select>
        <button
            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
            Delete
        </button>
                <button onClick={this.toggleEditing}>
                    Done
                </button>
                </span>}
            {!this.state.editing &&
            <span>
                {
                    this.props.widget.type === 'HEADING' &&
                    <HeadingWidget widget={this.props.widget} updateWidget={this.props.updateWidget}/>
                }
                {
                    this.props.widget.type === 'PARAGRAPH' &&
                    <ParagraphWidget widget={this.props.widget} updateWidget={this.props.updateWidget}/>
                }
                {
                    this.props.widget.type === 'LINK' &&
                    <LinkWidget widget={this.props.widget} updateWidget={this.props.updateWidget}/>
                }
                {
                    this.props.widget.type === 'LIST' &&
                    <ListWidget widget={this.props.widget} updateWidget={this.props.updateWidget}/>
                }
                {
                    this.props.widget.type === 'IMAGE' &&
                    <ImageWidget widget={this.props.widget} updateWidget={this.props.updateWidget}/>
                }
                <button onClick={this.toggleEditing}>
                    Edit
                </button>
            </span>}
        </li>
        )
    }
}

export default WidgetListItemComponent;
