
import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as siteActions from '../../store/actions/siteActions'

import Button from '../../UI/Button/Button'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

import scrollToComponent from 'react-scroll-to-component'

class NavBar extends Component {
    scrollToHandler ( ref ) {
        console.log( ref.offsetTop )
        console.log( window.pageYOffset )
        scrollToComponent( ref, {offset: 0, align: 'top', duration: 1000, ease: 'inOutQuad'} )
    }

    componentWillMount () {
        this.buildHomeRef()
        window.addEventListener( "scroll", () => this.props.setCurrentBlockHandler(window.pageYOffset) )
    }

    buildHomeRef () {
        let homeBlockData = {
            ref: document.body,
            label: <HomeIcon />,
            current: true
        }
        this.props.addPageBlockDataHandler( homeBlockData )
    }

    render () {
        return (
            <AppBar onScroll={this.props.setCurrentBlockHandler} position="sticky" elevation={10}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    {this.props.pageBlockData.map( ( pageBlock, i ) => {
                        return <Button click={() => this.scrollToHandler( pageBlock.ref )} key={i} label={pageBlock.label} />
                    } )}
                </Toolbar>
            </AppBar>
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

export default connect( mapStateToProps, mapDispatchToProps )( NavBar )