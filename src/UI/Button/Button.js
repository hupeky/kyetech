import React from 'react'
import Button from '@material-ui/core/Button'

import localClasses from './Button.css'

const button = ( props ) => {
    return (
        <Button style={props.style} className={localClasses.Button} onClick={props.click}>
        {props.children}
            {props.icon ? props.icon : null}
            <div style={props.spacer ? {margin:'0 15px'} : null}>{props.label}</div>
            {props.bg === false ? null : <div className={localClasses.bg} />}
            {props.outline ? <div className={localClasses.outline} /> : null}
        </Button>
    )
}

export default button