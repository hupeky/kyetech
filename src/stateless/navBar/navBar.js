import React from 'react'

import Button from '../../UI/Button/Button'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const navBar = (props) => {
    return (
        <AppBar position="sticky" elevation={10}>
        <Toolbar>
            <IconButton onClick={props.toggleDrawer}>
                <MenuIcon />
            </IconButton>
            {props.pageBlockData.map( ( pageBlock, i ) => {
                return <Button click={() => props.scrollButton( pageBlock.ref )} key={i} label={pageBlock.label} />
            } )}
        </Toolbar>
    </AppBar>
    )
}

export default navBar
