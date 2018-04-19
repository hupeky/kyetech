import React from 'react'
import 'aframe'

const Card = ( props ) => {
    return (
        <a-box
            cursor-listener={`x:${props.x}; z:${props.z}`} clickIdPass={props.click} x={props.x} z={props.z}
            animate={`distance: ${props.distance}; animIndex:${props.animInd};`}
            material="color: #ed677a; roughness: 0.8; metalness: 0.1"
            position={props.position}
            shadow="cast: true; receive: true"
            
            geometry="primitive: box; height:0.5; width:0.94; depth:0.90">
        </a-box>
    )
}

export default Card