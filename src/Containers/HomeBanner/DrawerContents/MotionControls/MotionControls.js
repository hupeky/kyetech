import React, {Component} from 'react'
import Slider from '../../../../UI/Slider/Slider'
import {connect} from 'react-redux'

import * as actionTypes from '../../../../store/actions/actions'

import ImgButton from '../../../../UI/ImgButton/ImgButton'
import waveTypes from './waveTypes'
import waveShapes from './waveShapes'

import GridList from '@material-ui/core/GridList'
import Button from '../../../../UI/Button/Button'
import GridListTile from '@material-ui/core/GridListTile'
import {withStyles} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

import RadioChecked from '@material-ui/icons/RadioButtonChecked'
import RadioUnchecked from '@material-ui/icons/RadioButtonUnchecked'

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
        marginBottom: '0px !important'
    },
    buttonLayout: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
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

    clickHandler = (waveFunction) => {
        const {autoWave} = this.props
        waveFunction()
        autoWave && this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )

    }


    render () {
        const {classes} = this.props
        return (

            <div style={{overflow: 'hidden', padding: '10px 20px', boxSizing: 'border-box'}}>
                                <Typography variant="body2" gutterBottom={true}>Controls:</Typography>
                <div className={classes.buttonLayout}>
                <Button icon={this.props.paused ? PauseIcon : PlayIcon} click={() => this.props.togglePause()} ></Button>
                <Button icon={this.props.autoWave ? RadioChecked : RadioUnchecked} click={() => this.props.toggleAutoWave()} spacer label="Auto Wave" />
                </div>
                <Typography variant="body2" gutterBottom={true}>Select wave type:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {waveTypes.map( type => (
                        <GridListTile key={type.key} cols={1}>

                            <ImgButton click={() => this.clickHandler(() => this.props.setWaveType( type.key ) )} src={type.img} />
                        </GridListTile >
                    ) )
                    }
                </GridList >

                <Typography variant="body2" gutterBottom={true}>Select wave shape:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {waveShapes.map( shape => (
                        <GridListTile key={shape.title} cols={1}>
                            <ImgButton click={() => this.clickHandler(() => this.props.setWaveShape( shape.key ) )}  src={shape.img} />
                            <Typography variant="body1" align="center" color='textSecondary' />

                        </GridListTile >
                    ) )
                    }
                </GridList >

                <Typography variant="body2" gutterBottom={true}>Select wave height:</Typography>
                <Slider min={1} max={20} step={1} default={this.props.waveHeight} onRelease={this.waveHeightHandler} />

                <Typography variant="body2" gutterBottom={true}>Wave travel speed:</Typography>
                <Slider min={5} max={35} step={3} default={this.props.waveSpeed} onRelease={this.waveSpeedHandler} />

                <Typography variant="body2" gutterBottom={true}>Bounce speed:</Typography>
                <Slider min={1} max={10} step={1} default={this.props.bounceSpeed} onRelease={this.bounceSpeedHandler} />

            </div>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        waveHeight: state.aScene.waveHeight,
        waveSpeed: state.aScene.waveSpeed,
        bounceSpeed: state.aScene.bounceSpeed,
        dimensions: state.aScene.dimensions,
        paused: state.aScene.paused,
        autoWave: state.aScene.autoWave
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePause: (  ) => dispatch( {type: actionTypes.TOGGLE_PAUSE} ),
        toggleAutoWave: (  ) => dispatch( {type: actionTypes.TOGGLE_AUTO_WAVE} ),
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setWaveType: ( waveType ) => dispatch( {type: actionTypes.SET_WAVE_TYPE, waveType: waveType} ),
        setWaveShape: ( waveShape ) => dispatch( {type: actionTypes.SET_WAVE_SHAPE, waveShape: waveShape} ),
        setWaveHeight: ( waveHeight ) => dispatch( {type: actionTypes.SET_WAVE_HEIGHT, waveHeight: waveHeight} ),
        setWaveSpeed: ( waveSpeed ) => dispatch( {type: actionTypes.SET_WAVE_SPEED, waveSpeed: waveSpeed} ),
        setBounceSpeed: ( bounceSpeed ) => dispatch( {type: actionTypes.SET_BOUNCE_SPEED, bounceSpeed: bounceSpeed} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MotionControls ) )

