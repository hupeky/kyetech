import React, {Component} from 'react'
import Slider from '../../../../UI/Slider/Slider'
import {connect} from 'react-redux'

import * as actionTypes from '../../../../store/actions'

import Auxillery from '../../../../hoc/Auxillery/Auxillery'
import ImgButton from '../../../../UI/ImgButton/ImgButton'

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
        return (

            <Auxillery>
                <Typography variant="body1" gutterBottom={true}>Select pixel art:</Typography>
                <Divider />
                <Typography gutterBottom={true}> </Typography>
                <GridList className={classes.gridList} cellHeight={85} cols={4}>
                    {Object.keys(this.props.singles).map( single => (
                        <GridListTile key={this.props.singles[single].key} cols={1}>
                            <ImgButton click={() => this.props.startColourSingle( this.props.singles[single].key )} src={this.props.singles[single].imgSrc} />
                            <Typography variant="body1" align="center" color='textSecondary' />
                        </GridListTile >
                    ) )}
                </GridList >

            </Auxillery>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        singles: state.aScene.colours.singles,
        animations: state.aScene.colours.animations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startColourSingle: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_SINGLE, ref: ref} ),
        startColourAnim: ( name ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, name: name} )
    }
}


export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( ColourControls ) )

