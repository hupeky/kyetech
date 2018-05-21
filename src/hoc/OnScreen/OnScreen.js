import React from 'react'

import TrackVisibility from 'react-on-screen'

function onScreen ( WrappedComponent,isPartial, offset ) {
    return class extends React.Component {
        componentWillReceiveProps ( nextProps ) {
            //console.log( 'Current props: ', this.props )
            //console.log( 'Next props: ', nextProps )
        }
        render () {
            // Wraps the input component in a container, without mutating it. Good!
            return (
                <TrackVisibility partialVisibility={isPartial} offset={offset} >
                    {( {isVisible} ) => <WrappedComponent onScreen={isVisible} {...this.props} />}
                </TrackVisibility>
            )
        }
    }
}

export default onScreen
