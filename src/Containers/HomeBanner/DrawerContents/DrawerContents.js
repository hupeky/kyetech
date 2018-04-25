import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import SwipeableViews from 'react-swipeable-views'

import Divider from 'material-ui/Divider'
import Toolbar from 'material-ui/Toolbar'
import AppBar from 'material-ui/AppBar'
import Tabs, {Tab} from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'


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
    }
} )

class ASceneDrawer extends React.Component {
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
                <AppBar style={{height: '45px'}} position="static" color="secondary">
                    <Toolbar style={{minHeight: '45px'}}>
                        <Typography variant="subheading">3D controls</Typography>
                    </Toolbar>
                </AppBar>
                <Divider style={{backgroundColor: '#333'}} />
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="secondary"
                    >
                        <Tab style={{minWidth: '50%'}} label="Colour" />
                        <Tab style={{minWidth: '50%'}} label="Motion" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <ColourControls />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <MotionControls />
                    </TabContainer>
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
