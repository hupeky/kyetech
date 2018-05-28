import React from 'react'
import classes from './companyLogo.css'
import Headline from '../../UI/headline/headline'

const companyLogo = ( props ) => {
    return (
        <div {...props} className={classes.companyLogo}>
            <img src={props.img} role="presentation" />
        </div>
    )
}

export default companyLogo