import React from 'react'
import TrackVisibility from 'react-on-screen'

import classes from './SlideIn.css'

const slideIn = (props) => {
    return (
        <TrackVisibility throttleInterval={150} partialVisibility={props.partial} offset={props.offset} >
            {( {isVisible} ) => <div className={[classes.SlideIn, isVisible ? classes.visible : classes.notVisible].join( " " )}>{props.children}</div>}
        </TrackVisibility>
    )
}

export default slideIn
