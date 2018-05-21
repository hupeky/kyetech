import React from 'react'
import Button from 'material-ui/Button'
import {withStyles} from 'material-ui/styles'

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
        <Button className={classes.root}>

            <div style={{position: 'relative'}}>{props.label}</div>
            <div
                onClick={props.click}
                className={localClasses.button}
                style={{
                    position: 'absolute',
                    width: '100%', height: '100%',
                    top: 0, left: 0,
                    backgroundColor: 'red'
                }} />
        </Button>
    )
}

export default withStyles( navButtonStyles )( button )