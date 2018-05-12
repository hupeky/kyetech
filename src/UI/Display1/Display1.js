import React from 'react'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import SlideIn from '../SlideIn/SlideIn'

const styles = theme => ( {
    display1: {
        [theme.breakpoints.up( 'xs' )]: {fontSize: '1.2em'},
        [theme.breakpoints.up( 'md' )]: {fontSize: '1.4em'},
        [theme.breakpoints.up( 'lg' )]: {fontSize: '1.6em'},
        fontWeight: 500,
        textAlign:'left',
        marginBottom:'10px'
    }
} )

const Display1 = ( props ) => {
    const {classes} = props
    return (
        <SlideIn>
            <Typography variant={'display1'} className={classes.display1}>{props.children}</Typography>
        </SlideIn>
    )
}
export default withStyles( styles, {withTheme: true} )( Display1 )
