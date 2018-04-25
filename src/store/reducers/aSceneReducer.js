import * as actionTypes from '../actions'
import colours from './buildColourFrames'

const initialState = {
    animationIndex: 0,
    dimensions: {
        x: 25,
        z: 25
    },
    waveType: 'pixel',
    waveShape: 'wave',
    waveHeight: 4,
    waveSpeed: 8,
    bounceSpeed: 6,
    animCoords: null,
    stopAnim: false,
    distanceLookUp: [],

    colours: {},
    colourIndex: 0,
    colourSingleRef: null
}

console.log( initialState.colours )

const calcualteDistanceLookup = ( newX, newZ ) => {
    // let selectType = ['pixel','diagonal1','diagonal2','vertical','horizontal']
    let updatedDistanceLookUp = []
    for ( let x = 0; x < newX; x++ ) {
        let updatedDistanceLookUpRow = []
        for ( let z = 0; z < newZ; z++ ) {
            let pixelDistanceArray = []
            let diagonal1DistanceArray = []
            let diagonal2DistanceArray = []
            let verticalDistanceArray = []
            let horizontalDistanceArray = []
            for ( let x2 = 0; x2 < newX; x2++ ) {
                let pixelDistanceArrayRow = []
                let diagonal1DistanceArrayRow = []
                let diagonal2DistanceArrayRow = []
                let verticalDistanceArrayRow = []
                let horizontalDistanceArrayRow = []
                for ( let z2 = 0; z2 < newZ; z2++ ) {
                    pixelDistanceArrayRow[z2] = Math.hypot( Math.abs( x - x2 ), Math.abs( z - z2 ) ) // pixel
                    diagonal1DistanceArrayRow[z2] = Math.abs( ( x2 + z2 ) - ( x + z ) ) // diagonal 1
                    diagonal2DistanceArrayRow[z2] = Math.abs( ( x2 - z2 ) - ( x - z ) ) // diagonal 2
                    verticalDistanceArrayRow[z2] = Math.hypot( Math.abs( x - x2 ), Math.abs( z2 - z2 ) ) // vertical
                    horizontalDistanceArrayRow[z2] = Math.hypot( Math.abs( x2 - x2 ), Math.abs( z - z2 ) ) // horizontal
                }
                pixelDistanceArray.push( pixelDistanceArrayRow )
                diagonal1DistanceArray.push( diagonal1DistanceArrayRow )
                diagonal2DistanceArray.push( diagonal2DistanceArrayRow )
                verticalDistanceArray.push( verticalDistanceArrayRow )
                horizontalDistanceArray.push( horizontalDistanceArrayRow )
            }
            updatedDistanceLookUpRow[z] = {}
            updatedDistanceLookUpRow[z].pixel = pixelDistanceArray
            updatedDistanceLookUpRow[z].diag1 = diagonal1DistanceArray
            updatedDistanceLookUpRow[z].diag2 = diagonal2DistanceArray
            updatedDistanceLookUpRow[z].vert = verticalDistanceArray
            updatedDistanceLookUpRow[z].horizontal = horizontalDistanceArray
        }
        updatedDistanceLookUp.push( updatedDistanceLookUpRow )
    }
    return updatedDistanceLookUp
}

initialState.distanceLookUp = calcualteDistanceLookup( initialState.dimensions.x, initialState.dimensions.z )
initialState.colours = colours

console.log( initialState.colours.singles )

const ASceneReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.START_ANIMATION:
            return {
                ...state,
                animCoords: {...action.coords},
                animationIndex: state.animationIndex + 1
            }
        case actionTypes.SET_DIMENSIONS:
            return {
                ...state,
                dimensions: {...action.dimensions},
                distanceLookUp: calcualteDistanceLookup( action.dimensions.x, action.dimensions.z )
            }
        case actionTypes.SET_WAVE_TYPE:
            return {
                ...state,
                waveType: action.waveType
            }
        case actionTypes.SET_WAVE_SHAPE:
            return {
                ...state,
                waveShape: action.waveShape
            }
        case actionTypes.SET_WAVE_HEIGHT:
            return {
                ...state,
                waveHeight: action.waveHeight
            }
        case actionTypes.SET_WAVE_SPEED:
            return {
                ...state,
                waveSpeed: action.waveSpeed
            }
        case actionTypes.SET_BOUNCE_SPEED:
            return {
                ...state,
                bounceSpeed: action.bounceSpeed
            }
        case actionTypes.START_COLOUR_SINGLE:
            return {
                ...state,
                colourSingleRef: action.ref,
                colourIndex: state.colourIndex + 1
            }
        default:
            return state
    }
}
export const START_COLOUR_SINGLE = 'START_COLOUR_SINGLE'
export default ASceneReducer
