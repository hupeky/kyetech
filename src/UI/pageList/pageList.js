import React from 'react'

import Grid from '@material-ui/core/Grid'

import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import ListIcon from '../../assets/SVG/Tile/listIcon.svg'

import {withStyles} from '@material-ui/core/styles'

const styles = theme => ( {
    ListItemText: {
        padding: 0,
        fontSize: "0.875rem",
        fontWeight: 400,
        marginBottom: 0,
        lineHeight: "1.46429em",
        opacity: 0.8

    },
    ListItem: {

            paddingTop: '0px',
            paddingBottom: '6px'

    },
    ListItemIcon: {

            marginLeft: '20px',
            width: '15px',
            height: '15px'
    },
    centerList: {
        margin: '0 auto 50px auto'
    }

} )

const pageList = ( props ) => {
    const {classes} = props
    return (
        <List className={classes.centerList}>
            <Grid container>
                {props.list.map( ( listItem, i ) => {
                    return (
                        <Grid key={i} item xs={12} sm={6}>
                            <ListItem className={classes.ListItem} disableGutters>
                                <ListItemIcon className={classes.ListItemIcon} >
                                    <img src={ListIcon} role="presentation" />
                                </ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary={listItem} />
                            </ListItem>
                        </Grid>
                    )
                } )}
            </Grid>
        </List>
    )
}

export default withStyles( styles )( pageList )