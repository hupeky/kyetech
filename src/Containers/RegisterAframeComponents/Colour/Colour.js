import {Component} from 'react'
import AFRAME from 'aframe'

import {connect} from 'react-redux'

import TimelineLite from 'gsap/src/uncompressed/TimelineLite.js'
import {Power0} from "gsap/src/uncompressed/easing/EasePack"


class Colour extends Component {

    componentWillMount () {
        let thisClass = this
        AFRAME.registerComponent( 'colour', {
            schema: {
                x: {type: 'number', default: 0},
                z: {type: 'number', default: 0},
                colourIndex: {type: 'number', default: 0}
            },

            init: function () {
                this.el.colourTween = new TimelineLite()
            },
            update: function ( oldData ) {
                if ( this.data.colourIndex !== oldData.colourIndex && this.data.colourIndex > 0 ) {
                    let tween = new TimelineLite()
                    const rgb = thisClass.props.lookUp[thisClass.props.colourRef].rgbaArray.data.slice(thisClass.props.lookUp[thisClass.props.colourRef].rgbaArray.index(this.data.x,this.data.z,0),  thisClass.props.lookUp[thisClass.props.colourRef].rgbaArray.index(this.data.x,this.data.z,0) + 3)
                    tween.to( this.el.object3D.children[0].material.color, 1, { r:rgb[0],g:rgb[1],b:rgb[2], delay: 0, ease: Power0.none })


                }
            }
        } )
    }

    render () {
        return null
    }
}
// console.log('rgba', pixels.data.slice(pixels.index(3,0,0),  pixels.index(3,0,0) + 4))
const mapStateToProps = state => { // map redux state to class props
    return {
        lookUp: state.aScene.colours.singles,
        colourRef: state.aScene.colourSingleRef
    }
}

export default connect( mapStateToProps )( Colour )