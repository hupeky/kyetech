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
                this.el.loops = {}
            },
            update: function ( oldData ) {
                if ( this.data.colourIndex !== oldData.colourIndex && this.data.colourIndex > 0 ) {
                    this.el.colourTween.kill()
                    this.el.colourTween.clear( true )
                    this.el.colourTween = new TimelineLite()

                    const onComplete = ( loopId ) => {
                        if ( this.el.loops[loopId].loopCount > 0 ) {
                            this.el.loops[loopId].loopCount -= 1
                            this.el.colourTween.seek( this.el.loops[loopId].position )
                        } else ( this.el.loops[loopId].loopCount = this.el.loops[loopId].originalLoopCount )

                    }

                    thisClass.props.colours[thisClass.props.colourRef].forEach( ( frame ) => {
                        const rgb = frame.rgbaArray.data.slice( frame.rgbaArray.index( this.data.x, this.data.z, 0 ), frame.rgbaArray.index( this.data.x, this.data.z, 0 ) + 3 )
                        this.el.colourTween.to( this.el.object3D.children[0].material.color, frame.duration, {r: rgb[0], g: rgb[1], b: rgb[2], delay: frame.delay, ease: Power0.none} )
                        if ( frame.label ) {
                            this.el.colourTween.addLabel( frame.label )
                        }
                        if ( frame.goTo ) {
                            this.el.loops[frame.goTo.id] = {
                                id: [frame.goTo.id],
                                loopCount: frame.goTo.loopCount,
                                originalLoopCount: frame.goTo.loopCount,
                                position: frame.goTo.position
                            }
                            this.el.colourTween.to( this.el.object3D.children[0].material.color, frame.duration, {r: rgb[0], g: rgb[1], b: rgb[2], delay: frame.delay, ease: Power0.none, onComplete: onComplete, onCompleteParams: [frame.goTo.id]} )
                        } else {
                            this.el.colourTween.to( this.el.object3D.children[0].material.color, frame.duration, {r: rgb[0], g: rgb[1], b: rgb[2], delay: frame.delay, ease: Power0.none} )
                        }
                    } )
                }
            }
        } )
    }

    render () {
        return null
    }
}
const mapStateToProps = state => { // map redux state to class props
    return {
        colours: state.aScene.colours,
        colourRef: state.aScene.colourRef
    }
}

export default connect( mapStateToProps )( Colour )