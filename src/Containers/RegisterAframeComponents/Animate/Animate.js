import React, {Component} from 'react'

import * as actionTypes from '../../../store/actions'
import Auxillery from '../../../hoc/Auxillery/Auxillery'

import TimelineLite from 'gsap/src/uncompressed/TimelineLite.js'
//import {Elastic} from 'gsap/src/uncompressed/easing/EasePack'
import CustomEase from 'gsap/CustomEase'
import AFRAME from 'aframe'

class CursorListener extends Component {
    componentWillMount () {
        AFRAME.registerComponent( 'animate', {
            schema: {
                key: {type: 'string', default: ''},
                distance: {type: 'number', default: -1},
                animIndex: {type: 'number', default: 0}
            },
            init: function () {
                this.myData = {}
                this.myData.animations = {}
            },
            update: function ( oldData ) {
                const removeAnimation = ( animName, tween ) => {
                    tween.kill()
                    delete this.myData.animations[animName]
                }
                console.log ('this.data.animIndex',this.data.animIndex,'oldData.animIndex',oldData.animIndex) 
                if ( this.data.animIndex !== oldData.animIndex && this.data.animIndex > 0 ) {
                    let animName = `anim${this.data.animIndex}`
                    this.myData.animations[animName] = {}
                    let wave = CustomEase.create( 'custom', 'M0,0,C0,0,0,0,0,0,0.046,0,0.024,-0.464,0.064,-0.464,0.114,-0.464,0.128,0.396,0.186,0.396,0.24,0.396,0.248,-0.222,0.292,-0.222,0.346,-0.222,0.348,0.164,0.4,0.164,0.452,0.164,0.454,-0.086,0.5,-0.086,0.546,-0.086,0.558,0.072,0.604,0.072,0.65,0.072,0.654,-0.04,0.7,-0.04,0.746,-0.04,0.754,0.024,0.794,0.024,0.836,0.024,0.862,-0.02,0.898,-0.02,0.934,-0.02,0.958,0,1,0' )
                    let delay = this.data.distance / 7
        
                    this.myData.animations[animName].tween = new TimelineLite().to( this.myData.animations[animName], 7, { y:4, delay: delay, ease: wave, onComplete: () => removeAnimation( animName, this.myData.animations[animName].tween ) })
                    this.myData.animations[animName].y = 0
                }
            },
            tick: function ( ) {
                if ( Object.keys( this.myData.animations ).length > 0 ) {
                    const yPos = Object.keys( this.myData.animations ).reduce( ( accumulator, animation ) => { return this.myData.animations[animation].y + accumulator }, 0 )
                    this.el.object3D.position.y = yPos
                }
            }
        })
    }

    render () {
        return null
    }
}

export default CursorListener
