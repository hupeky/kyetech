import React, {Component} from 'react'
import {connect} from 'react-redux'

import {withStyles} from 'material-ui/styles'
import {MuiThemeProvider} from 'material-ui/styles'

import Grid from 'material-ui/Grid'
import darkTheme from '../../assets/themes/darkTheme'

import PageBlock from '../../UI/pageBlock/pageBlock'
import Footer from '../../stateless/footer/footer'
import NavBar from '../../stateless/navBar/navBar'

import * as siteActions from '../../store/actions/siteActions'

import Button from '../../UI/Button/Button'

import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'

import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

import scrollToComponent from 'react-scroll-to-component'

const styles = theme => ( {
    drawerPaperTemp: {
        maxWidth: '350px',
        backgroundColor: theme.palette.grey.main
    },
    content: {
        flexGrow: 1
    }
} )

class Layout extends Component {
    state = {
        drawerOpen: false
    }

    scrollFromButtonHandler ( ref ) {
        console.log( ref.offsetTop )
        console.log( window.pageYOffset )
        scrollToComponent( ref, {offset: 0, align: 'top', duration: 1000, ease: 'inOutQuad'} )
    }

    componentWillMount () {
        this.buildHomeRef()
        window.addEventListener( "scroll", () => this.props.setCurrentBlockHandler( window.pageYOffset ) )
    }

    buildHomeRef () {
        let homeBlockData = {
            ref: document.body,
            label: <HomeIcon />,
            icon: <HomeIcon />,
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

                        <AppBar color={'secondary'} position="sticky" elevation={10}>
                            <Toolbar>
                                <IconButton>
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        {this.props.pageBlockData.map( ( pageBlock, i ) => {
                            return <List onClick={() => this.scrollFromButtonHandler( pageBlock.ref )} key={i} label={pageBlock.label}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={pageBlock.label}
                                    />
                                </ListItem>
                            </List>
                        } )}


                    </div>

                </Drawer>


                {this.props.children}
                <PageBlock label={'Contact'} backgroundColor={theme.palette.primary.main}>
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <MuiThemeProvider theme={darkTheme}>
                                <Footer />
                            </MuiThemeProvider>
                        </Grid>
                    </Grid>
                </PageBlock>
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
