import React from 'react'

import OnScreen from '../../hoc/OnScreen/OnScreen'
import classes from './skillsBlockHolder.css'

import Grid from 'material-ui/Grid'


const skillsBlockHolder = ( props ) => {
    const buildLogosHandler =  () => {
        let delay = 0
        return props.logosArray.map(logo => {
            const Component = logo.component
            delay += 60
            return <Grid item xs={6} sm={3}><div style={{transitionDelay:delay+'ms'}} className={classes.slideIn}><Component id="react" /></div></Grid>
        })
        
    }
    console.log( props.onScreen )
    return (
        <div className={props.onScreen ? classes.onScreen : null}   >
            <Grid container spacing={8}>
                {buildLogosHandler()}
            </Grid>
        </div>
    )
}

export default OnScreen( skillsBlockHolder, true, -125 ) // component, partial vis, offset
