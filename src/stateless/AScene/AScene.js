import React from 'react'
import CardManager from '../../Containers/CardManager/CardManager'
import Camera from '../AScene/Camera/Camera'

import classes from './AScene.css'

import 'aframe'

const AScene = () => {
    return (
        <header>
            <section>
                <a-scene  shadow  embedded vr-mode-ui="enabled: false" background="transparent: true" class={classes.Embedded}>
                    <Camera />
                    <a-entity light="type: hemisphere; color: #ffffff; groundColor: #a3a3a3; intensity: 1"></a-entity>
                    <a-entity light="
                        type: directional;
                        intensity:0.8;
                        target:#directionaltarget;">
                        <a-entity
                            id="directionaltarget"
                            position="-0.5 -0.4 -1" />
                    </a-entity>
                    <a-entity light="type: point; intensity: 0.6; distance: 1000; decay: 0"
                        position="80 40 -80" />
                    <a-entity light="type: point; intensity: 0.2; distance: 1000; decay: 0"
                        position="-80 20 -80" />
                    <a-entity light="type: point; intensity: 0.6; distance: 1000; decay: 0"
                        position="50 30 100" />
                    <a-entity id="center" position="0 -2 0" geometry="primitive: box; height:0.1; width:0.1; depth:0.1"></a-entity>
                    <CardManager/>
                </a-scene>
            </section>
        </header >
    )
}


export default AScene
