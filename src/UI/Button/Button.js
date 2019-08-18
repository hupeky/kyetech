import React from 'react'
import Button from '@material-ui/core/Button'

import localClasses from './Button.css'

const button = ( {outline, bg, icon, style, spacer, label, children, click} ) => {
    const renderIcon = (Icon) => {
        // console.log (Icon)
        return <Icon/>
    }
    console.log ()
    return (
        <Button style={style} className={localClasses.Button} onClick={click}>
        {children}
            {renderIcon(icon ? icon : 'div')}
            <div style={spacer ? {margin:'0 15px'} : null}>{label}</div>
            {bg === false ? null : <div className={localClasses.bg} />}
            {outline ? <div className={localClasses.outline} /> : null}
        </Button>
    )
}

export default button