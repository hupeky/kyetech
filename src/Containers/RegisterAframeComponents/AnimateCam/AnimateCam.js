import {Component} from 'react'
import AFRAME from 'aframe'

class AnimateCam extends Component {

    componentWillMount () {
        AFRAME.registerComponent( 'animate-cam', {
            schema: {
                animate: {type: 'boolean', default: false},
                position: {type: 'vec3', default: '0 0 0'}
            },

            init: function () {
            },
            update: function ( oldData ) {

            }
        } )
    }

    render () {
        return null
    }
}

export default AnimateCam
