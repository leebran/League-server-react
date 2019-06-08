import React from 'react'

const ImageWidget = ({widget, updateWidget}) =>
    <div>
        <h1>Image Widget [{widget.id}]</h1>
        <textarea
            defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}
            placeholder="Enter image url.."></textarea>
        <h2>Preview</h2>
        <img src={widget.text} width={300} height={200}>
        </img>
    </div>


export default ImageWidget
