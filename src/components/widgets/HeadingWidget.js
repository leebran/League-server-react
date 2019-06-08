import React from 'react'
import HeadingWidgetComponent from "./HeadingWidgetComponent";

const HeadingWidget = ({widget, updateWidget}) =>
    <div>
        <h1>Heading Widget [{widget.id}]</h1>
        <input defaultValue={widget.text2}
               onChange={(e) => updateWidget({...widget, text2: e.target.value})}
            placeholder="Heading text"/>
        <select defaultValue={widget.text}
                onChange={(e) => updateWidget({...widget, text: e.target.value})}>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
            <option>Heading 4</option>
            <option>Heading 5</option>
        </select>
        <h2>Preview</h2>
    <HeadingWidgetComponent widget={widget} updateWidget={updateWidget}/>

    </div>

export default HeadingWidget
