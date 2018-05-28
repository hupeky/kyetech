import React from 'react'
import TrackVisibility from 'react-on-screen'

import classes from './ScaleIn.css'

const ScaleIn = (props) => {
    return (
        <TrackVisibility partialVisibility={props.partial}  offset={props.offset}>
            {( {isVisible} ) => <div className={[classes.ScaleIn, isVisible ? classes.visible : classes.notVisible].join( " " )}>{props.children}</div>}
        </TrackVisibility>
    )
}

export default ScaleIn
