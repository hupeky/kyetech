import React from 'react'
import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {withTheme} from 'material-ui/styles'
import Paper from 'material-ui/Paper'

import TrackVisibility from 'react-on-screen'

import themeCustomisation from '../../UI/themeCustomisation'

const darkTheme = createMuiTheme( {

    ...themeCustomisation,
    palette: {
        ...themeCustomisation.palette,
        type: 'dark' // Switching the dark mode on is a single property value change.
    }
} )

const home = ( props ) => {
    const {theme} = props
    return (
        <Auxillery>
            <MuiThemeProvider theme={darkTheme}>
                <Paper elevation={10}>
                    <TrackVisibility>
                        <HomeBanner />
                    </TrackVisibility>
                </Paper>
                <TrackVisibility>
                    {({ isVisible }) => <PageBlock type={'intro'} isVisible={isVisible} backgroundColor={theme.palette.primary.main} />}
                </TrackVisibility>
            </MuiThemeProvider>
            <TrackVisibility>
                    {({ isVisible }) => <PageBlock type={'intro'} isVisible={isVisible} backgroundColor={theme.palette.grey.main} />}
                </TrackVisibility>
        </Auxillery>
    )
}

export default withTheme()( home )
