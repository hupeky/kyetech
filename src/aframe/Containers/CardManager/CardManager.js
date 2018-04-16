import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from '../Card/Card'
import AFRAME from 'aframe'
import * as actionTypes from '../../../store/actions'

class CardManager extends Component {
    state = {
    }

    componentWillMount () {
        this.props.setDimensions( {x: 25, z: 25} )
        this.props.startAnimation(  {x: 24, z: 0} )
        this.props.startAnimation(  {x: 0, z: 0} )
        this.props.startAnimation(  {x: 0, z: 24} )
        this.props.startAnimation(  {x: 24, z: 24} ) 

        let thisClass = this
        AFRAME.registerComponent( 'cursor-listener', {
            schema: {
                x: {type: 'number', default: 0},
                z: {type: 'number', default: 0}
            },

            init: function () {
                let data = this.data // Component property values.
                let el = this.el // Reference to the component's entity.
                el.addEventListener( 'click', () => {
                    console.log( el.object3D, 'was clicked' )
                    let coords = {x: data.x, z: data.z}
                    thisClass.props.startAnimation( coords )
                } )
            }
        } )
    }

    render () {
        let cardEntityArray = []
        let delay = null
        for ( let z = 0; z < this.props.dimensions.z; z++ ) {
            let row = []
            for ( let x = 0; x < this.props.dimensions.x; x++ ) {
                if ( this.props.animCoords )
                    delay = this.props.distanceLookUp[this.props.animCoords.x][this.props.animCoords.z][this.props.selectType][x][z]
                else
                    delay = null
                row.push( <Card animInd={this.props.animationIndex} animStop={this.state.animStop} distance={delay} position={`${x} -1 ${-z}`} key={`${x}_${z}`} id={`${x}_${z}`} x={x} z={z} /> )
            }
            cardEntityArray.push( row )
        }

        return (
            <a-entity click={this.cardClickedHandler} position={`-${this.props.dimensions.x / 2} 0 ${this.props.dimensions.z / 2}`} rotation="0 0 0" >
                {cardEntityArray}
            </a-entity>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        animationIndex: state.animationIndex,
        dimensions: state.dimensions,
        animCoords: state.animCoords,
        selectType: state.selectType,
        distanceLookUp: state.distanceLookUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CardManager )
