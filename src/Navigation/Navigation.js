import React from 'react'
import Auxillery from '../hoc/Auxillery/Auxillery'

import {NavLink} from 'react-router-dom'

const navigation = ( props ) => {
    return (
        <Auxillery>
            <NavLink
                to="/cv" exact={props.exact}
                activeClassName='active'>
                {props.children}
            </NavLink>
        </Auxillery>
    )
}
export default navigation

