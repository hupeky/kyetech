import React, {Component} from 'react'
import DrawerContents from './DrawerContents/DrawerContents'

import 'typeface-roboto'

import {withStyles} from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Hidden from 'material-ui/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'

import AScene from '../../stateless/AScene/AScene'

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
        [theme.breakpoints.up( 'xs' )]: {height: '300px'},
        [theme.breakpoints.up( 'sm' )]: {height: '400px'},
        [theme.breakpoints.up( 'md' )]: {height: '600px'},
        [theme.breakpoints.up( 'lg' )]: {height: '700px'},
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
        [theme.breakpoints.up( 'xs' )]: {height: '300px'},
        [theme.breakpoints.up( 'sm' )]: {height: '400px'},
        [theme.breakpoints.up( 'md' )]: {height: '600px'},
        [theme.breakpoints.up( 'lg' )]: {height: '700px'},
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
