import React from 'react'

import Button from '../../UI/Button/Button'

import Hidden from '@material-ui/core/Hidden'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'

import LinkedInIcon from './../../assets/icons/LinkedIn'
import DownloadCVIcon from './../../assets/icons/cv'

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
                    <Button spacer click={() => props.scrollButton( document.body)} label={'Home'} >
                        <ThreeDRotation color={'secondary'}/>
                        
                    </Button>
                    {props.pageBlockData.map( ( pageBlock, i ) => {
                        return (
                            <Button bg={false} click={() => props.scrollButton( pageBlock.ref )} key={i} >
                                {pageBlock.label}
                            </Button>
                        )
                    } )}
                </Hidden>
                <menu style={{marginLeft: 'auto'}}>
                    <a target="_blank" href="https://www.linkedin.com/in/kyehuelin/">
                        <Button>
                            <LinkedInIcon height={25}/>
                        </Button>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/kyehuelin/">
                        <Button spacer label={'CV'}>
                            <DownloadCVIcon height={25} />
                    </Button>
                    </a>
                </menu>
            </Toolbar>
        </AppBar>
    )
}

export default navBar
