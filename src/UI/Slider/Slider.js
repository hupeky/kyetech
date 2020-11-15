import React from 'react'
import Slider from 'rc-slider'

const mySlider = ( props ) => {
    let marks = {}
    for ( let i = props.min; i <= props.max; i +=props.step ) {
        let parsedI = parseFloat(i.toFixed(1))
        marks[i] = {
            style: { userSelect: "none" },
            label: <strong>{parsedI}</strong>
        }
        switch ( parsedI ) {
            case props.min:
            case props.max:
                marks[i] = {
                    style: {color: 'white', userSelect: "none" },
                    label: <strong>{parsedI}</strong>
                }
                break

            default: break
        }
    }

    marks[props.max] = {
        style: {color: 'white',userSelect: "none" },
        label: <strong>{props.max}</strong>
    }



    return (
        <div style={{marginBottom: 40 }}>
            <Slider
            dots
            min={props.min}
            max={props.max}
            marks={marks}
            step={props.step}
            onAfterChange={ (value) => props.onRelease && props.onRelease(value)}
            onChange={ (value) => props.onChange && props.onChange(value)}
            defaultValue={props.default} />
        </div>
    )
}

export default mySlider