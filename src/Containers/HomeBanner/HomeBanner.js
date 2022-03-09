import React, {Component} from 'react'
import {connect} from 'react-redux'

import DrawerContents from './DrawerContents/DrawerContents'

import * as actionTypes from '../../store/actions/actions'

import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import AScene from '../../stateless/AScene/AScene'
import {withStyles} from '@material-ui/core/styles'

import myClasses from './HomeBanner.css'
import {Typography} from '@material-ui/core'

// import SecondaryLinks from '../../stateless/secondaryLinks/secondaryLinks'
import Button from '../../UI/Button/Button'
import DemoIcon from '../../assets/icons/demo'
import arrowLeft from '../../assets/icons/arrowLeft.svg'
import CloseIcon from '@material-ui/icons/Close'
const drawerWidth = 400

const styles = theme => ( {
    root: {
        flexGrow: 1,
        height: '800px',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%'
    },
    maxHeightBreaks: {
        [theme.breakpoints.down( 'xs' )]: {maxHeight: '650px'},
        [theme.breakpoints.up( 'sm' )]: {maxHeight: '700px'},
        [theme.breakpoints.up( 'md' )]: {maxHeight: '900px'},
        [theme.breakpoints.up( 'xl' )]: {maxHeight: '1000px'}
    },
    heightBreaks: {
        [theme.breakpoints.down( 'xs' )]: {height: '650px'},
        [theme.breakpoints.up( 'sm' )]: {height: '700px'},
        [theme.breakpoints.up( 'md' )]: {height: '900px'},
        [theme.breakpoints.up( 'xl' )]: {height: '1000px'}
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
        overflow: 'visible',
        borderLeft: 'none'
    },
    drawerPaperTemp: {
        maxWidth: drawerWidth,
        backgroundColor: '#363636'

    },
    content: {
        flexGrow: 1
    },
    blockGreenText: {
        backgroundColor: theme.palette.primary.main,
        padding: '3px 20px',
        margin: '15px 0',
        opacity: 1
    }

} )

class HomeBanner extends Component {
    state = {
        mobileOpen: false
    }

    handleDrawerToggle = () => {
        this.setState( {mobileOpen: !this.state.mobileOpen} )
    }

    startDemoHandler = () => {
        this.props.enter3DHandler()
        this.props.startColourAnim( 'animBackdrops' )
    }


    render () {
        const {classes} = this.props
        return (

            <section className={[classes.root, classes.heightBreaks].join( " " )}>
            {this.props.enter3D ? <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}
                >
                    <MenuIcon />
                </IconButton> : null}


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
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DrawerContents align='center' />
                    </Drawer>
                </Hidden>

                <div className={classes.content}>
                    <AScene>
                        <div className={[myClasses.overlay, this.props.enter3D ? myClasses.removed : null].join( " " )}
                        >
                            <div className={myClasses.bg} />
                            <div className={[myClasses.contentHolder, classes.maxHeightBreaks].join( " " )}>
                                <Typography variant={'display3'}>Kye Huelin</Typography>
                                <Typography style={{opacity: 1, textAlign: "center", padding: "0 30px"}} variant={'headline'}>VR/AR/XR Web Software Engineer</Typography>
                                <Typography style={{marginTop: '0',opacity: 1}} variant={'body2'}>Three, Babylon, React, Typescript </Typography>
                                {/* <SecondaryLinks /> */}
                                <Typography className={classes.blockGreenText} variant={'body2'}>Contractor, London, available now</Typography>

                                <Hidden mdUp>
                                    <Button style={{marginTop:'10px',marginBottom:'5px'}} click={this.startDemoHandler} outline='true'  spacer="true" label={'Click to play Pixels'}>
                                        <DemoIcon height={25} />
                                    </Button>

                                    <Typography style={{width: '90%', maxWidth: '280px', textAlign: 'center', fontSize: '0.75em'}} variant={'body1'}>(Behind this text is a demo I call 'pixels': It's a homage to the games that inspired me to love tech)</Typography>
                                </Hidden>
                            </div>
                        </div>
                    </AScene>
                </div>

                <Hidden smDown implementation="css">
                    <Drawer
                        variant="persistent"
                        anchor='right'

                        open
                        classes={{
                            paper: [classes.drawerPaper, classes.heightBreaks].join( " " )
                        }}
                    >
                        <DrawerContents />
                        <div className={[myClasses.drawerOverlay, this.props.enter3D ? myClasses.removed : null].join( " " )}>
                            <div className={myClasses.bg} />
                            <div className={[myClasses.contentHolder, classes.maxHeightBreaks].join( " " )}>
                                <Typography style={{opacity: 1,marginBottom:'10px'}} variant={'headline'}>Interactive demo</Typography>
                                <Typography style={{marginBottom: '15px', textAlign: 'right'}} variant={'body1'}>Come and play this demo: 'pixels' a homage to the games that inspired me to love tech</Typography>


                                <Button style={{marginBottom: '5px'}} click={this.startDemoHandler} outline='true' spacer="true" label={'Click to play Pixels'}>
                                    <DemoIcon height={25} />
                                </Button>

                                <img className={myClasses.arrowLeft} src={arrowLeft} role="presentation" />
                            </div>
                        </div>
                    </Drawer>

                </Hidden>
            </section>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D // access the aScene reducer slice from global state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} ),
        enter3DHandler: () => dispatch( {type: actionTypes.TOGGLE_ENTER_3D} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles, {withTheme: true} )( HomeBanner ) )
