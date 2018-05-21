import React from 'react'

import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'

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
