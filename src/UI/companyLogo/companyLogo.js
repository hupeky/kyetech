import React from 'react'
import classes from './companyLogo.css'
import Headline from '../../UI/headline/headline'

const companyLogo = ( props ) => {
    return (
        <div  style={{height: 250, paddingBottom: "40px"}} {...props} className={classes.companyLogo}>
            <img style={{height: "100%"}}  src={props.img} role="presentation" />
        </div>
    )
}

export default companyLogo