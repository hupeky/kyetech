import React, {Component} from 'react'
import {connect} from 'react-redux'

import {withStyles} from '@material-ui/core/styles'
import {MuiThemeProvider} from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import darkTheme from '../../assets/themes/darkTheme'

import PageBlock from '../../UI/pageBlock/pageBlock'
import Footer from '../../stateless/footer/footer'
import NavBar from '../../stateless/navBar/navBar'

import * as siteActions from '../../store/actions/siteActions'

import SlideIn from '../../UI/SlideIn/SlideIn'
import ScaleIn from '../../UI/ScaleIn/ScaleIn'
import Display3 from '../../UI/Display3/Display3'

import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

import ThreeDRotation from '@material-ui/icons/ThreeDRotation'

import ChatIcon from '@material-ui/icons/Chat'


import scrollToComponent from 'react-scroll-to-component'

const styles = theme => ( {
    drawerPaperTemp: {
        maxWidth: '350px',
        backgroundColor: theme.palette.grey.main
    },
    content: {
        flexGrow: 1
    },
    pageBlockIcon: {
        fontSize: '200px',
        color: 'white',
        opacity: '0.1',
        boxSizing: 'border-box',
        margin: '15px 0'
    }
} )

class Layout extends Component {
    state = {
        drawerOpen: false
    }

    scrollFromButtonHandler ( ref ) {
        console.log( ref.offsetTop )
        console.log( window.pageYOffset )
        scrollToComponent( ref, {offset: -50, align: 'top', duration: 1000, ease: 'inOutQuad'} )
    }

    componentWillMount () {
        this.buildHomeRef()
        window.addEventListener( "scroll", () => this.props.setCurrentBlockHandler( window.pageYOffset ) )
    }

    buildHomeRef () {
        let homeBlockData = {
            ref: document.body,
            label: <HomeIcon />,
            icon: <ThreeDRotation />,
            current: true
        }
        this.props.addPageBlockDataHandler( homeBlockData )
    }

    toggleDrawer = ( isOpen ) => {
        console.log( 'did click toggleDrawer' )
        this.setState( {
            drawerOpen: isOpen
        } )
    }

    render () {
        const {classes, theme} = this.props
        return (
            <React.Fragment>
                <span onScroll={this.props.setCurrentBlockHandler} ></span>
                <MuiThemeProvider theme={darkTheme}>
                    <NavBar
                        toggleDrawer={() => this.toggleDrawer( true )}
                        scrollButton={this.scrollFromButtonHandler}
                        pageBlockData={this.props.pageBlockData} />
                </MuiThemeProvider>

                <Hidden mdUp={true}>
                    <Drawer
                        variant="temporary"
                        anchor='left'
                        open={this.state.drawerOpen}
                        onClick={() => this.toggleDrawer( false )}
                        classes={{
                            paper: classes.drawerPaperTemp
                        }}>
                        <div
                            role="button"
                            onClick={() => this.toggleDrawer( false )}
                            onKeyDown={() => this.toggleDrawer( false )}>

                            <AppBar color={'primary'} position="sticky" elevation={10}>
                                <Toolbar>
                                    <IconButton style={{color: 'white'}}>
                                        <MenuIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            {this.props.pageBlockData.map( ( pageBlock, i ) => {
                                return <List onClick={() => this.scrollFromButtonHandler( pageBlock.ref )} key={i} label={pageBlock.label}>
                                    <ListItem button>
                                        <ListItemIcon color='secondary'>
                                            {pageBlock.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={pageBlock.label}
                                        />
                                    </ListItem>
                                </List>
                            } )}


                        </div>

                    </Drawer>
                </Hidden>

                {this.props.children}
                <MuiThemeProvider theme={darkTheme}>
                <PageBlock icon={<ChatIcon />} label={'Contact'} backgroundColor={theme.palette.primary.main}>
                    <SlideIn partial={true}>
                        <Display3>Get in touch</Display3>
                    </SlideIn>
                    <ScaleIn><ChatIcon style={{color: 'white', padding: '30px 15px'}} className={classes.pageBlockIcon} /></ScaleIn>
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <MuiThemeProvider theme={darkTheme}>
                                <Footer />
                            </MuiThemeProvider>
                        </Grid>
                    </Grid>
                </PageBlock>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        pageBlockData: state.site.pageBlockData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentBlockHandler: ( windowPos ) => dispatch( {type: siteActions.SET_CURRENT_BLOCK, windowPos: windowPos} ),
        addPageBlockDataHandler: ( pageBlockData ) => dispatch( {type: siteActions.ADD_PAGEBLOCK, pageBlockData: pageBlockData} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles, {withTheme: true} )( Layout ) )
