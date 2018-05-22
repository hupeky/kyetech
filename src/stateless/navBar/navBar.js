import React from 'react'

import Button from '../../UI/Button/Button'

import Hidden from '@material-ui/core/Hidden'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const navBar = ( props ) => {
    return (
        <AppBar position="sticky" elevation={10}>
            <Toolbar>
                <Hidden only={['md', 'lg', 'xl']}>
                    <IconButton onClick={props.toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Hidden only={['xs', 'sm']}>
                    {props.pageBlockData.map( ( pageBlock, i ) => {
                        return <Button click={() => props.scrollButton( pageBlock.ref )} key={i} label={pageBlock.label} />
                    } )}
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default navBar
