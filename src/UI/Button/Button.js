import React from 'react'
import Button from '@material-ui/core/Button'

import localClasses from './Button.css'
import LinkedInIcon from './../../assets/icons/LinkedIn.js'

const button = ( props ) => {
    return (
        <Button className={localClasses.Button} onClick={props.click}>
        {props.children}
            {props.icon ? props.icon : null}
            <div style={props.spacer ? {marginLeft: '15px'} : null}>{props.label}</div>
            {props.bg === false ? null : <div className={localClasses.bg} />}
        </Button>
    )
}

export default button