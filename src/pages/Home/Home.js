import React from 'react'
import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'
import Display3 from '../../UI/Display3/Display3'
import Display1 from '../../UI/Display1/Display1'

import Tile from '../../assets/SVG/Tile/Tile'
import ScaleIn from '../../UI/ScaleIn/ScaleIn'
import SlideIn from '../../UI/SlideIn/SlideIn'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {withTheme} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import themeCustomisation from '../../UI/themeCustomisation'

import megamanBG from '../../assets/32/single/megamanBG.png'
import sonicBG from '../../assets/32/single/sonicBG.png'
import zeldaBG from '../../assets/32/single/zeldaBG.png'
import tetrisBG from '../../assets/32/single/tetrisBG.png'
import marioBG from '../../assets/32/single/marioBG.png'
import ryuBG from '../../assets/32/single/ryuBG.png'
import kartBG from '../../assets/32/single/kartBG.png'
import rtypeBG from '../../assets/32/single/rtypeBG.png'

import SkillsBlockHolder from '../../UI/skillsBlockHolder/skillsBlockHolder'
import ManageChildren from '../../hoc/ManageChildren/ManageChildren'

import ReactLogo from '../../assets/SVG/logos/ReactLogo'

const darkTheme = createMuiTheme( {

    ...themeCustomisation,
    palette: {
        ...themeCustomisation.palette,
        type: 'dark' // Switching the dark mode on is a single property value change.
    }
} )

const skillsArray = [
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    },
    {
        component: ReactLogo,
        id: 'react'
    }
]

const home = ( props ) => {
    const {theme} = props
    return (
        <Auxillery>
            <MuiThemeProvider theme={darkTheme}>

                <Paper elevation={10}>
                    <HomeBanner />
                </Paper>

                <PageBlock type={'intro'} backgroundColor={theme.palette.primary.main}>

                    <Display3>About me</Display3>

                    <Grid container spacing={8}>
                        {/* ********** icon */}
                        <Grid item xs={4} sm={5} />
                        <Grid item xs={4} sm={2}>
                            <ScaleIn>
                                <Tile icon={'skills'} />
                            </ScaleIn>
                        </Grid>
                        <Grid item xs={4} sm={2} />
                        <Grid item xs={12} />

                        {/* ********** intro */}
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <SlideIn>
                                <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                            </SlideIn>
                            <SlideIn>
                                <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>
                            </SlideIn>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>

                </PageBlock>

            </MuiThemeProvider>

            <PageBlock type={'skills'} backgroundColor={theme.palette.grey.main}>

                <Display3>Skills</Display3>

                <Grid container spacing={8}>
                    {/* ********** icon */}
                    <Grid item xs={4} sm={5} />
                    <Grid item xs={4} sm={2}>
                        <ScaleIn>
                            <Tile icon={'skills'} />
                        </ScaleIn>
                    </Grid>
                    <Grid item xs={4} sm={2} />
                    <Grid item xs={12} />  {/*  clear line */}

                    {/* ********** intro */}
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn>
                            <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                        </SlideIn>
                        <SlideIn>
                            <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>
                        </SlideIn>
                    </Grid>
                    <Grid item xs={12} />   {/*  clear line */}
                    {/* ********** skill set */}
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn>
                            <Display1>Technical</Display1>
                        </SlideIn>
                        <SkillsBlockHolder logosArray={skillsArray} />

                    </Grid>
                    <Grid item xs={12} />   {/*  clear line */}
                </Grid>

            </PageBlock>

        </Auxillery >
    )
}

export default withTheme()( home )