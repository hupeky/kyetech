import React, {Component} from 'react'

import 'aframe'
import 'typeface-roboto'

import {withStyles} from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Hidden from 'material-ui/Hidden'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from 'material-ui/Divider'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Checkbox from 'material-ui/Checkbox'

import sonic from './assets/sonic-bg-final.png'

import Scene from './aframe/Stateless/Scene/Scene'

const drawerWidth = 400;

const styles = theme => ( {
    root: {
        flexGrow: 1,
        height: '900px',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    navIconHide: {
        [theme.breakpoints.up( 'md' )]: {
            display: 'none',
        },
        zIndex: theme.zIndex.drawer + 10,
        position: 'absolute',
        right: '10px',
        color: 'white'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        [theme.breakpoints.up( 'md' )]: {
            position: 'relative',
        },
        height: '900px',
        maxWidth: drawerWidth,
        width:'100vw',
    },
    drawerPaperTemp: {
        maxWidth: drawerWidth,
        width:'100%',

    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default
    },
} );

class App extends Component {
    state = {
        mobileOpen: false,
        checked: [1]
    }

    handleDrawerToggle = () => {
        this.setState( {mobileOpen: !this.state.mobileOpen} );
    }

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        this.setState({
          checked: newChecked,
        });
      };

    render () {
        const {classes, theme} = this.props;
        console.log (theme)
        const drawer = (
            <div>
                <div className={classes.toolbar}>Title here</div>
                <Divider />
                <List>
                    {[0, 1, 2, 3].map( value => (
                        <ListItem key={value} dense button className={classes.listItem}>
                            <Avatar alt="Remy Sharp" src={sonic} />
                            <ListItemText primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                                <Checkbox
                                    onChange={this.handleToggle( value )}
                                    checked={this.state.checked.indexOf( value ) !== -1}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ) )}
                </List>
            </div>
        )

        console.log( 'did render' )
        return (
            <div className={classes.root}>
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
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        classes={{
                            paper: classes.drawerPaperTemp,
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
                        {drawer}
                    </Drawer>
                </Hidden>

                <main className={classes.content}>
                    <Scene />
                </main>

                <Hidden smDown implementation="css">
                    <Drawer
                        variant="persistent"
                        anchor='right'

                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>


            </div>
        )
    }
}

export default withStyles( styles, {withTheme: true} )( App );
