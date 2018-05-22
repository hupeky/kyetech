import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ( {
    headline: {
        [theme.breakpoints.up( 'xs' )]: {fontSize: '1.2em'},
        [theme.breakpoints.up( 'md' )]: {fontSize: '1.3em'},
        [theme.breakpoints.up( 'lg' )]: {fontSize: '1.4em'},

        fontWeight: 500,
        textAlign:'left',
        marginBottom:'10px',
        marginTop:'40px'
    }
} )

const headline = ( props ) => {
    const {classes} = props
    return (

            <Typography {...props} variant={'display3'} className={classes.headline}>{props.children}</Typography>

    )
}
export default withStyles( styles, {withTheme: true} )( headline )
