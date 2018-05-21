import React from 'react'
import Slider from 'rc-slider'

const mySlider = ( props ) => {
    let marks = {}
    for ( let i = props.min; i <= props.max; i +=props.step ) {
        marks[i] = `${i}`
        switch ( i ) {
            case props.min:
            case props.max:
                marks[i] = {
                    style: {color: 'white' },
                    label: <strong>{i}</strong>
                }
                break

            default: break
        }
    }

    return (
        <div style={{marginBottom: 40 }}>
            <Slider dots min={props.min} max={props.max} marks={marks} step={props.step} onAfterChange={(value) => props.onRelease(value)} defaultValue={props.default} />
        </div>
    )
}

export default mySlider