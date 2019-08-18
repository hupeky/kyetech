import {Component} from 'react'
import {connect} from 'react-redux'

import TimelineLite from '../../../assets/gsap/TimelineLite'

import CustomEase from '../../../assets/gsap/plugins/CustomEase'
import AFRAME from 'aframe'

class Animate extends Component {
    componentWillMount () {
        let thisClass = this
        AFRAME.registerComponent( 'animate', {
            schema: {
                key: {type: 'string', default: ''},
                distance: {type: 'number', default: -1},
                animIndex: {type: 'number', default: 0},
                paused: {type: 'boolean', default: false}
            },
            init: function () {
                this.myData = {}
                this.myData.wave = CustomEase.create( 'custom', 'M0,0,C0,0,0,0,0,0,0.046,0,0.024,-0.464,0.064,-0.464,0.114,-0.464,0.128,0.396,0.186,0.396,0.24,0.396,0.248,-0.222,0.292,-0.222,0.346,-0.222,0.348,0.164,0.4,0.164,0.452,0.164,0.454,-0.086,0.5,-0.086,0.546,-0.086,0.558,0.072,0.604,0.072,0.65,0.072,0.654,-0.04,0.7,-0.04,0.746,-0.04,0.754,0.024,0.794,0.024,0.836,0.024,0.862,-0.02,0.898,-0.02,0.934,-0.02,0.958,0,1,0' )
                this.myData.saw = CustomEase.create( 'custom', `M0,0 C0,0 0,0 0,0 0.006,-0.045 0.1,0.5 0.1,0.5 0.1,0.5 0.2,-0.24 0.2,-0.24 0.2,-0.24 0.302,0.236 0.302,0.236 0.302,0.236 0.4,-0.146 0.4,-0.146 0.4,-0.146 0.5,0.1 0.5,0.1 0.5,0.1 0.588,-0.096 0.588,-0.096 0.588,-0.096 0.7,0.066 0.7,0.066 0.7,0.066 0.794,-0.058 0.794,-0.058 0.794,-0.058 0.898,0.03 0.898,0.03 0.898,0.03 0.93,0.02 1,0` )
                this.myData.step = CustomEase.create( 'custom', `M0,0 C0,0 0.052,0.606 0.052,0.606 0.052,0.606 0.216,0.606 0.216,0.606 0.216,0.606 0.258,-0.13 0.258,-0.13 0.258,-0.13 0.422,-0.13 0.422,-0.13 0.422,-0.13 0.464,0.28 0.464,0.28 0.464,0.28 0.624,0.282 0.624,0.282 0.624,0.282 0.676,-0.132 0.676,-0.132 0.676,-0.132 0.826,-0.132 0.826,-0.132 0.826,-0.132 0.872,0 0.872,0 0.872,0 0.918,0 1,0` )
                this.myData.bounce = CustomEase.create( 'custom', `M0,0 C0,0 0.026,0.58 0.15,0.58 0.268,0.58 0.3,0 0.3,0 0.3,0 0.348,0.368 0.424,0.368 0.526,0.368 0.538,0 0.538,0 0.538,0 0.572,0.194 0.634,0.194 0.706,0.194 0.736,0 0.736,0 0.736,0 0.754,0.088 0.81,0.088 0.866,0.088 0.886,0 0.886,0 0.886,0 0.896,0.03 0.93,0.03 0.958,0.03 0.976,0 0.976,0 0.994,0 0.98,0 1,0`)
                this.myData.bounceLookUp = [9,9,8.2,7.5,7,6.2,5.4,4.6,3.8,3,2.2]
                this.myData.animations = {}
                this.myData.pause = false
            },
            update: function ( oldData ) {
                const removeAnimation = ( animName, tween ) => {
                    tween.kill()
                    delete this.myData.animations[animName]
                }
                if ( this.data.animIndex !== oldData.animIndex && this.data.animIndex > 0 ) {
                    let animName = `anim${this.data.animIndex}`
                    this.myData.animations[animName] = {}

                    let delay = this.data.distance / thisClass.props.waveSpeed
                    this.myData.animations[animName].tween = new TimelineLite().to( this.myData.animations[animName], this.myData.bounceLookUp[thisClass.props.bounceSpeed], { y:thisClass.props.waveHeight, delay: delay, ease: this.myData[thisClass.props.waveShape], onComplete: () => removeAnimation( animName, this.myData.animations[animName].tween ) })
                    this.myData.animations[animName].y = 0
                }
                if ( this.data.paused) {
                    if ( Object.keys( this.myData.animations ).length > 0 ) {
                        Object.keys( this.myData.animations ).forEach( ( animation ) => this.myData.animations[animation].tween.pause() )
                    }
                } else {
                    if ( Object.keys( this.myData.animations ).length > 0 ) {
                        Object.keys( this.myData.animations ).forEach( ( animation ) => this.myData.animations[animation].tween.play() )
                    }
                }
            },
            tick: function ( ) {
                if ( !this.data.paused) {
                    if ( Object.keys( this.myData.animations ).length > 0 ) {
                        const yPos = Object.keys( this.myData.animations ).reduce( ( accumulator, animation ) => { return this.myData.animations[animation].y + accumulator }, 0 )
                        this.el.object3D.position.y = yPos
                    }
                }

            }
        })
    }

    render () {
        return null
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        waveShape: state.aScene.waveShape,
        waveHeight: state.aScene.waveHeight,
        waveSpeed: state.aScene.waveSpeed,
        bounceSpeed: state.aScene.bounceSpeed
    }
}

export default connect( mapStateToProps )( Animate )
