import React, {Component} from 'react'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'

import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'


import MotionControls from './MotionControls/MotionControls'
import ColourControls from './ColourControls/ColourControls'
import Auxillery from '../../../hoc/Auxillery/Auxillery'

function TabContainer ( {children, dir} ) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
}

const styles = theme => ( {
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 300
    },
    slides: {
        padding: '5px'
    }
} )

class ASceneDrawer extends Component {
    state = {
        value: 0
    };

    handleChange = ( event, value ) => {
        this.setState( {value} )
    };

    handleChangeIndex = index => {
        this.setState( {value: index} )
    };

    render () {
        const {theme} = this.props

        return (
            <Auxillery>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="subheading">3D controls</Typography>
                    </Toolbar>
                </AppBar>

                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="secondary"
                        scrollable={false}
                        style={{marginBottom: '0px'}}
                    >
                        <Tab style={{minWidth: '50%', marginBottom: '0px'}} label="Motion" />
                        <Tab style={{minWidth: '50%', marginBottom: '0px'}} label="Colour" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    disabled={true}>
                        <MotionControls />
                        <ColourControls />
                </SwipeableViews>
            </Auxillery>
        )
    }
}

ASceneDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles( styles, {withTheme: true} )( ASceneDrawer )
