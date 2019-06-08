import React from 'react'

const LinkWidget = ({widget, updateWidget}) =>
    <div>
        <h1>Link Widget [{widget.id}]</h1>
        <textarea
            defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}
            placeholder="Enter link url.."></textarea>
        <textarea
            defaultValue={widget.text2}
            onChange={(e) => updateWidget({...widget, text2: e.target.value})}
            placeholder="Enter link name.."></textarea>
        <h2>Preview</h2>
            <a href={widget.text}>{widget.text2}</a>
    </div>

export default LinkWidget
