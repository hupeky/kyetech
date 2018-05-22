import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import SlideIn from '../SlideIn/SlideIn'

const styles = theme => ( {
    display3: {
        [theme.breakpoints.up( 'xs' )]: {fontSize: '2em'},
        [theme.breakpoints.up( 'sm' )]: {fontSize: '2.5em'},
        [theme.breakpoints.up( 'md' )]: {fontSize: '2.75em'},
        [theme.breakpoints.up( 'lg' )]: {fontSize: '3.0em'}
    }
} )

const Display3 = ( props ) => {
    const {classes} = props
    return (
        <SlideIn partial={true}>
            <Typography {...props} variant={'display3'} className={classes.display3}>{props.children}</Typography>
        </SlideIn>
    )
}
export default withStyles( styles, {withTheme: true} )( Display3 )
