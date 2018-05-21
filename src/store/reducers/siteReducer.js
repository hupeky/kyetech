import * as siteActions from '../actions/siteActions'

const initialState = {
    pageBlockData: []
}



const siteReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case siteActions.ADD_PAGEBLOCK:
            console.log( action.pageBlockData )
            return {
                ...state,
                pageBlockData: [...state.pageBlockData, action.pageBlockData]
            }
        case siteActions.SET_CURRENT_BLOCK:
            console.log( action.windowPos )
            return {
                ...state
            }
        default:
            return state
    }
}

export default siteReducer
