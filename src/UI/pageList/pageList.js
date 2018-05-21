import React from 'react'

import Grid from 'material-ui/Grid'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import ListIcon from '../../assets/SVG/Tile/listIcon.svg'

import SlideIn from '../../UI/SlideIn/SlideIn'
import classes from './pageList.css'

const pageList = (props) => {
    return (
        <List className={classes.centerList}>
            <Grid container>
                {props.list.map( ( listItem, i ) => {
                    return (
                        <Grid key={i} item xs={12} sm={6}>
                                <ListItem disableGutters>
                                    <ListItemIcon >
                                        <img src={ListIcon} role="presentation" />
                                    </ListItemIcon>
                                    <ListItemText primary={listItem} />
                                </ListItem>
                        </Grid>
                    )
                } )}
            </Grid>
        </List>
    )
}

export default pageList
