import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from './Card/Card'
import 'aframe'
import * as actionTypes from '../../store/actions'

class CardManager extends Component {
    state = {
        amimIndex:0,
        animCoords: null
    }

    componentWillMount () {
        this.props.setDimensions( {x: 25, z: 25} )
        // this.props.startAnimation(  {x: 24, z: 24} ) 
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
                row.push( <Card animInd={this.props.animationIndex} distance={delay} position={`${x} -0 ${-z}`} key={`${x}_${z}`} id={`${x}_${z}`} x={x} z={z} /> )
            }
            cardEntityArray.push( row )
        }
        console.log (`-${this.props.dimensions.x / 2}`)
        return (
            <a-entity click={this.cardClickedHandler} position={`-${Math.floor(this.props.dimensions.x / 2)} 0 ${Math.floor(this.props.dimensions.z / 2)}`} rotation="0 0 0" >
                {cardEntityArray}
            </a-entity>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        animationIndex: state.aScene.animationIndex, // access the aScene reducer slice from global state
        dimensions: state.aScene.dimensions,
        animCoords: state.aScene.animCoords,
        selectType: state.aScene.selectType,
        distanceLookUp: state.aScene.distanceLookUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CardManager )
