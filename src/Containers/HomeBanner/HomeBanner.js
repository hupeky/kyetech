import React, {Component} from 'react'
import DrawerContents from './DrawerContents/DrawerContents'

import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import AScene from '../../stateless/AScene/AScene'
import {withStyles} from '@material-ui/core/styles'

const drawerWidth = 400

const styles = theme => ( {
    root: {
        flexGrow: 1,
        height: '800px',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
        [theme.breakpoints.up( 'xs' )]: {height: '400px'},
        [theme.breakpoints.up( 'sm' )]: {height: '500px'},
        [theme.breakpoints.up( 'md' )]: {height: '700px'},
        [theme.breakpoints.up( 'xl' )]: {height: '800px'}
    },
    navIconHide: {
        [theme.breakpoints.up( 'md' )]: {
            display: 'none'
        },
        zIndex: theme.zIndex.drawer + 10,
        position: 'absolute',
        right: '10px',
        color: 'white'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        position: 'relative',
        backgroundColor: '#363636',
        [theme.breakpoints.up( 'xs' )]: {
            position: 'relative'
        },
        maxWidth: drawerWidth,
        [theme.breakpoints.up( 'xs' )]: {height: '400px'},
        [theme.breakpoints.up( 'sm' )]: {height: '500px'},
        [theme.breakpoints.up( 'md' )]: {height: '700px'},
        [theme.breakpoints.up( 'xl' )]: {height: '800px'}
    },
    drawerPaperTemp: {
        maxWidth: drawerWidth,
        backgroundColor: '#363636'

    },
    content: {
        flexGrow: 1
    }
} )

class HomeBanner extends Component {
    state = {
        mobileOpen: false,
        checked: [0]
    }

    handleDrawerToggle = () => {
        this.setState( {mobileOpen: !this.state.mobileOpen} )
    }


    render () {
        const {classes} = this.props
        return (
            
            <section className={classes.root}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerToggle}
                        className={classes.navIconHide}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            anchor='right'
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaperTemp
                            }}
                        >
                            <IconButton
                                color="secondary"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <DrawerContents />
                        </Drawer>
                    </Hidden>
                    
                    <div className={classes.content}>
                        <AScene />
                    </div>

                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="persistent"
                            anchor='right'

                            open
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            <DrawerContents />
                        </Drawer>
                    </Hidden>
            </section>
            
                    )
                }
            }
            
export default withStyles( styles, {withTheme: true} )( HomeBanner )
