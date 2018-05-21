import 'aframe'
import React from 'react'
require('aframe-orbit-controls-component-2')

const camera = ( props ) => {
    return (
        <a-camera
            id="camera"
            orbit-controls="
                autoRotate: false;
                target: #center;
                enableDamping: true;
                dampingFactor: 0.125;
                rotateSpeed:0.25;
                minDistance:3;
                maxDistance:100;"
            position="-10 30 40"
            camera="near:1; fov:22; far:40000;">
                <a-entity cursor="rayOrigin:mouse; fuse: false"></a-entity>
        </a-camera>
    )
}

export default camera
