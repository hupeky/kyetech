import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ( {
    title: {
        [theme.breakpoints.up( 'xs' )]: {fontSize: '1em'},
        [theme.breakpoints.up( 'md' )]: {fontSize: '1.3em'},
        [theme.breakpoints.up( 'lg' )]: {fontSize: '1.6em'}
    }
} )

const title = ( props ) => {
    const {classes} = props
    return (

            <Typography {...props} variant={'title'} className={classes.title}>{props.children}</Typography>

    )
}
export default withStyles( styles, {withTheme: true} )( title )
