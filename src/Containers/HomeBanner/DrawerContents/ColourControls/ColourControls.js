import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionTypes from '../../../../store/actions/actions'

import Auxillery from '../../../../hoc/Auxillery/Auxillery'
import ImgButton from '../../../../UI/ImgButton/ImgButton'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import {withStyles} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper

    },
    subheader: {
        width: '100%'
    },
    gridList: {
        marginBottom: '20px !important'
    }
} )

class ColourControls extends Component {
    state = {

    }

    waveHeightHandler = ( value ) => {
        this.props.setWaveHeight( value )
    }

    waveSpeedHandler = ( value ) => {
        this.props.setWaveSpeed( value )
    }

    bounceSpeedHandler = ( value ) => {
        this.props.setBounceSpeed( value )
    }


    render () {
        const {classes} = this.props
        let frames = {
            single: [],
            animation: [],
            abstract: []
        }
        Object.keys( this.props.colours ).forEach( ( item, index ) => {
            let itemJSX = (
                <GridListTile key={this.props.colours[item][0].key} cols={1}>
                    <ImgButton click={() => this.props.startColourAnim( this.props.colours[item][0].key )} src={this.props.colours[item][0].imgSrc} />
                    <Typography variant="body2" align="center" color='textSecondary' />
                </GridListTile >
            )
            frames[this.props.colours[item][0].type].push( itemJSX )
        } )

        return (

            <div style={{overflow: 'hidden', padding: '10px 20px', boxSizing: 'border-box'}}>
                <Typography variant="body2" gutterBottom={true}>Select pixel art:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {frames.single}
                </GridList >
                <Typography variant="body2" gutterBottom={true}>Select Animation:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {frames.animation}
                </GridList >
                <Typography variant="body2" gutterBottom={true}>Select Colours:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {frames.abstract}
                </GridList >
            </div>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        colours: state.aScene.colours
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} )
    }
}


export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( ColourControls ) )

