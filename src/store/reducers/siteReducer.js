import * as actionTypes from '../actions'

const initialState = {
}



const siteReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes :
            return {
                ...state
            }
        default:
            return state;
    }
}

export default siteReducer
