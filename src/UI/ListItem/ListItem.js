import React from 'react'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const listItem = (props) => {
    return (
        <ListItem disableGutters>
            <ListItemIcon style={{width: '35px', height: '35px'}}>
                <img src={props.img} role="presentation" />
            </ListItemIcon>
            <ListItemText primary={props.title} />
        </ListItem>
    )
}

export default listItem
