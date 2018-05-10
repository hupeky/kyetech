import React, {Component} from 'react'
import Slider from '../../../../UI/Slider/Slider'
import {connect} from 'react-redux'

import * as actionTypes from '../../../../store/actions'

import Auxillery from '../../../../hoc/Auxillery/Auxillery'
import ImgButton from '../../../../UI/ImgButton/ImgButton'
import waveTypes from './waveTypes'
import waveShapes from './waveShapes'

import GridList, {GridListTile} from 'material-ui/GridList'
import {withStyles} from 'material-ui/styles'

import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

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

class MotionControls extends Component {
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
        return (

            <Auxillery>
                <Typography variant="body1" gutterBottom={true}>Select wave type:</Typography>
                <GridList className={classes.gridList}  cellHeight={90}  cols={4}>
                    {waveTypes.map( type => (
                        <GridListTile key={type.key} cols={1}>
                            <ImgButton click={() => this.props.setWaveType( type.key )} src={type.img} />
                            <Typography variant="body1" align="center" color='textSecondary' />
                        </GridListTile >
                    ) )
                    }
                </GridList >
                <Typography variant="body1" gutterBottom={true}>Select wave shape:</Typography>
                <GridList className={classes.gridList}  cellHeight={90}  cols={4}>
                    {waveShapes.map( shape => (
                        <GridListTile key={shape.title} cols={1}>
                            <ImgButton click={() => this.props.setWaveShape( shape.key )} src={shape.img} />
                            <Typography variant="body1" align="center" color='textSecondary' />
                        </GridListTile >
                    ) )
                    }
                </GridList >
                <Typography variant="body1" gutterBottom={true}>Select wave height:</Typography>
                <Slider min={1} max={20} step={1} default={this.props.waveHeight} onRelease={this.waveHeightHandler} />

                <Typography variant="body1" gutterBottom={true}>Wave travel speed:</Typography>
                <Slider min={5} max={35} step={3} default={this.props.waveSpeed} onRelease={this.waveSpeedHandler} />

                <Typography variant="body1" gutterBottom={true}>Bounce speed:</Typography>
                <Slider min={1} max={10} step={1} default={this.props.bounceSpeed} onRelease={this.bounceSpeedHandler} />

            </Auxillery>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        waveHeight: state.aScene.waveHeight,
        waveSpeed: state.aScene.waveSpeed,
        bounceSpeed: state.aScene.bounceSpeed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setWaveType: ( waveType ) => dispatch( {type: actionTypes.SET_WAVE_TYPE, waveType: waveType} ),
        setWaveShape: ( waveShape ) => dispatch( {type: actionTypes.SET_WAVE_SHAPE, waveShape: waveShape} ),
        setWaveHeight: ( waveHeight ) => dispatch( {type: actionTypes.SET_WAVE_HEIGHT, waveHeight: waveHeight} ),
        setWaveSpeed: ( waveSpeed ) => dispatch( {type: actionTypes.SET_WAVE_SPEED, waveSpeed: waveSpeed} ),
        setBounceSpeed: ( bounceSpeed ) => dispatch( {type: actionTypes.SET_BOUNCE_SPEED, bounceSpeed: bounceSpeed} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MotionControls ) )

