import React from 'react'
import TrackVisibility from 'react-on-screen'

import classes from './SlideIn.css'

const slideIn = (props) => {
    const delay = {animationDelay: props.delay+'ms'}
    return (
        <TrackVisibility partialVisibility={props.partial} >
            {( {isVisible} ) => <div style={delay} className={[classes.SlideIn, isVisible ? classes.visible : classes.notVisible].join( " " )}>{props.children}</div>}
        </TrackVisibility>
    )
}

export default slideIn
