import React from 'react'
import TrackVisibility from 'react-on-screen'

import classes from './FadeIn.css'

const fadeIn = (props) => {
    return (
        <TrackVisibility partialVisibility={props.partial}  offset={props.offset} >
            {( {isVisible} ) => <div className={[classes.FadeIn, isVisible ? classes.visible : classes.notVisible].join( " " )}>{props.children}</div>}
        </TrackVisibility>
    )
}

export default fadeIn
