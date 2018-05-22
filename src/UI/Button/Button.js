import React from 'react'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

import localClasses from './Button.css'

const navButtonStyles = {
    root: {
        textTransform: 'capitalize',
        textDecoration: 'none',
        height: 50,
        minWidth: 'initial'
    }
}


const button = ( props ) => {
    const {classes} = props
    return (
        <Button onClick={props.click} className={classes.root}>
            <div style={{position: 'relative'}}>{props.label}</div>
            <div
                className={localClasses.button}
                style={{
                    position: 'absolute',
                    width: '100%', height: '100%',
                    top: 0, left: 0,
                    backgroundColor: 'red',
                    
                }} />
        </Button>
    )
}

export default withStyles( navButtonStyles )( button )