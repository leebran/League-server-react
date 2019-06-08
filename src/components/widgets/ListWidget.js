import React from 'react'

const ListWidget = ({widget, updateWidget}) =>
    <div>
        <h1>List Widget [{widget.id}]</h1>
        <textarea
            defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}
            placeholder="Enter one list item per line..."></textarea>
        <select>
            <option>Ordered List</option>
            <option>Unordered List</option>
        </select>
        <h2>Preview</h2>
        <ul>
            <li>
                {widget.text}
            </li>
        </ul>
    </div>

export default ListWidget
