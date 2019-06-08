import React from 'react'

const HeadingWidgetComponent = ({widget, updateWidget}) =>
{
    if (widget.text === "Heading 1") {
        return(
        <h1>
            {widget.text2}
        </h1>
        )
    }
    if (widget.text === "Heading 2") {
        return(
            <h2>
                {widget.text2}
            </h2>
        )
    }
    if (widget.text === "Heading 3") {
        return(
            <h3>
                {widget.text2}
            </h3>
        )
    }
    if (widget.text === "Heading 4") {
        return(
            <h4>
                {widget.text2}
            </h4>
        )
    }
    if (widget.text === "Heading 5") {
        return(
            <h5>
                {widget.text2}
            </h5>
        )
    }
    else {
        return(
            <h1>{widget.text2}</h1>
        )
    }
}


export default HeadingWidgetComponent
