import React from 'react'
import 'aframe'

const Card = ( props ) => {
    const {height} = props
    return (
        <a-box
            cursor-listener={`x:${props.x}; z:${props.z}`} clickIdPass={props.click} x={props.x} z={props.z}
            animate={`distance: ${props.distance}; animIndex:${props.animInd}; paused:${props.paused}`}
            colour={`x:${props.x}; z:${props.z}; colourIndex:${props.colourInd};`}
            material="color: #000; roughness: 0.8; metalness: 0.1"
            position={props.position}
            shadow="cast: true; receive: true"
            geometry={`primitive: box; height:${height}; width:0.95; depth:0.95`}>
        </a-box>
    )
}

export default Card
