import React from 'react'
import {withStyles} from 'material-ui/styles'

import Typography from 'material-ui/Typography'

const styles = theme => ( {
    display3: {
        [theme.breakpoints.up( 'xs' )]: {fontSize: '2em'},
        [theme.breakpoints.up( 'sm' )]: {fontSize: '2.5em'},
        [theme.breakpoints.up( 'md' )]: {fontSize: '3em'},
        [theme.breakpoints.up( 'lg' )]: {fontSize: '3.5em'}
    }
} )

const Display3 = ( props ) => {
    const {classes} = props
    return (
        <Typography variant={'display3'} className={classes.display3}>
            {props.children}
        </Typography>
    )
}

export default withStyles( styles, {withTheme: true} )( Display3 )
