import React, {Component} from 'react'
import CardManager from '../../Containers/CardManager/CardManager'
import Camera from '../Camera/Camera'

import classes from './Scene.css'

class Scene extends Component {
    state = {
        stop:false
    }
    stopAnimHandler (didStop) {
        if (didStop)
            this.setState({stop: true})
        else
            this.setState({stop: false})
    }
    render () {
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
                        <a-entity light="type: point; intensity: 0.5; distance: 1000; decay: 0"
                            position="80 40 -80" />
                        <a-entity light="type: point; intensity: 0.8; distance: 1000; decay: 0"
                            position="60 50 100" />

                        <a-entity id="center" position="0 -2 0" geometry="primitive: box; height:0.1; width:0.1; depth:0.1"></a-entity>
                        <CardManager/>
                    </a-scene>
                </section>
                <menu>
                </menu>
            </header >
        )
    }
}

export default Scene
