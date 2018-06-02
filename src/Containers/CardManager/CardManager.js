import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from './Card/Card'
import 'aframe'
import * as actionTypes from '../../store/actions/actions'

class CardManager extends Component {
    state = {

    }


    componentDidMount () {
         setTimeout(
             () => {
                 this.props.startColourAnim( 'megamanBG' )
                 this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
             }, 3000
        )
        this.intervalAnimation = setInterval(
            () => {
                if ( !this.props.enter3D )
                    this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
            }
            , 7000)
        
    }

    render () {
        let cardEntityArray = []
        let delay = null
        for ( let z = 0; z < this.props.dimensions.z; z++ ) {
            let row = []
            for ( let x = 0; x < this.props.dimensions.x; x++ ) {
                if ( this.props.animCoords )
                    delay = this.props.distanceLookUp[this.props.animCoords.x][this.props.animCoords.z][this.props.waveType][x][z]
                else
                    delay = null
                row.push( <Card colourInd={this.props.colourIndex} animInd={this.props.animationIndex} distance={delay} position={`${x} -0 ${-z}`} key={`${x}_${z}`} id={`${x}_${z}`} x={x} z={z} /> )
            }
            cardEntityArray.push( row )
        }
        return (
            <a-entity click={this.cardClickedHandler} position={`-${Math.floor( this.props.dimensions.x / 2 )} 0 ${Math.floor( this.props.dimensions.z / 2.3 )}`} rotation="0 0 0" >
                {cardEntityArray}
            </a-entity>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D,
        animationIndex: state.aScene.animationIndex, // access the aScene reducer slice from global state
        dimensions: state.aScene.dimensions,
        animCoords: state.aScene.animCoords,
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        distanceLookUp: state.aScene.distanceLookUp,

        colourIndex: state.aScene.colourIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} ),
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CardManager )
