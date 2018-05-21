import React, {Component} from 'react'
import {withTheme} from 'material-ui/styles'
import {MuiThemeProvider} from 'material-ui/styles'

import Typography from 'material-ui/Typography'

import Auxillery from '../../hoc/Auxillery/Auxillery'

import PageBlock from '../../UI/pageBlock/pageBlock'
import Grid from 'material-ui/Grid'
import darkTheme from '../../assets/themes/darkTheme'

import Footer from '../../stateless/footer/footer'
import NavBar from '../../stateless/navBar/navBar'

class Layout extends Component {
    state = {
    }

    render () {
        const {theme} = this.props
        return (
            <Auxillery>
                <MuiThemeProvider theme={darkTheme}>
                    <NavBar />
                </MuiThemeProvider>
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

            </Auxillery>
        )
    }
}

export default withTheme()( Layout )
