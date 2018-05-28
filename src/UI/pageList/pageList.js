import React from 'react'

import Grid from '@material-ui/core/Grid'

import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import ListIcon from '../../assets/SVG/Tile/listIcon.svg'

import {withStyles} from '@material-ui/core/styles'

const styles = theme => ( {

    ListItem: {
        paddingTop: '0px',
        paddingBottom: '6px',
        alignItems: 'flex-start'

    },
    ListItemText: {
        margin:0
    },
    ListItemIcon: {
        position:'relative',
        top:'3px',
        marginLeft: '20px',
        width: '15px',
        height: '15px'
    },
    centerList: {
        margin: '0 auto 0px auto'
    }


} )

const pageList = ( props ) => {
    const {classes} = props
    return (
        <List className={classes.centerList}>
            <Grid container>
                {props.list.map( ( listItem, i ) => {
                    return (
                        <Grid key={i} item xs={12} sm={props.columns ? 12 / props.columns : 12}>
                            <ListItem className={classes.ListItem} disableGutters>
                                <ListItemIcon className={classes.ListItemIcon} >
                                    <img src={ListIcon} role="presentation" />
                                </ListItemIcon>
                                
                                    <Typography className={classes.ListItemText} variant={'body1'}> {listItem} </Typography>
                            
                            </ListItem>
                        </Grid>
                    )
                } )}
            </Grid>
        </List>
    )
}

export default withStyles( styles )( pageList )