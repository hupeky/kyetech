import React from 'react'

import OnScreen from '../../hoc/OnScreen/OnScreen'
import classes from './skillsBlockHolder.css'

import Grid from '@material-ui/core/Grid'

import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core/List'
import ListIcon from '../../assets/SVG/Tile/listIcon.svg'

const skillsBlockHolder = ( props ) => {
    const buildLogosHandler = () => {
        let delay = 0
        return (
            <Grid className={classes.skillsBlock} container>
                {props.listArray.map( logo => {
                    const LogoComponent = logo.component
                    delay += 130
                    let startDelay = delay / 1000
                    return (
                        <Grid key={logo.id} item xs={6} sm={3}>
                            <div style={{transitionDelay: delay + 'ms'}} className={classes.slideIn}>
                                <ListItem disableGutters>
                                    <ListItemIcon style={{width: '35px', height: '35px'}}>
                                        <img src={ListIcon} role="presentation" />
                                    </ListItemIcon>
                                    <ListItemText primary={listItem} />
                                </ListItem>
                            </div>
                        </Grid>
                    )
                } )}
            </Grid>
        )

    }

    return (
        <div className={props.onScreen ? [classes.onScreen, 'onscreen'].join( " " ) : null}   >
            <Grid container spacing={8}>
                {buildLogosHandler()}
            </Grid>
        </div>
    )
}

export default OnScreen( skillsBlockHolder, true, -125 ) // component, partial vis, offset
