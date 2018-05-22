import React from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'

import Display3 from '../../UI/Display3/Display3'
import Display1 from '../../UI/Display1/Display1'
import Headline from '../../UI/headline/headline'
import PageImage from '../../UI/PageImage/PageImage'

import ScaleIn from '../../UI/ScaleIn/ScaleIn'
import SlideIn from '../../UI/SlideIn/SlideIn'
import CompanyLogo from '../../UI/companyLogo/companyLogo'

import {MuiThemeProvider} from '@material-ui/core/styles'
import {withTheme, withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import darkTheme from '../../assets/themes/darkTheme'
import PageList from '../../UI/pageList/pageList'

import SkillsBlockHolder from '../../UI/skillsBlockHolder/skillsBlockHolder'
import ReferenceHolder from '../../UI/referenceHolder/ReferenceHolder'
import ExampleImageHolder from '../../UI/ExampleImageHolder/ExampleImageHolder'

import rsLogo from '../../assets/SVG/logos/companies/rsLogo.svg'
import pretLogo from '../../assets/SVG/logos/companies/pretSmall.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'

// import aboutMeIcon from '../../assets/SVG/pageBlockIcons/aboutMe.svg'
import ExamplesIcon from '@material-ui/icons/Devices'
import RecommendationsIcon from '@material-ui/icons/ThumbUp'
import SkillsIcon from '@material-ui/icons/Settings'
import AboutMeIcon from '@material-ui/icons/FormatQuote'

import exampleImages from '../../data/exampleImages'

const styles = {
    pageBlockIcon: {
        fontSize: '200px',
        color: 'white',
        opacity: '0.1',
        boxSizing: 'border-box',
        margin: '15px 0'
    }
}

const home = ( props ) => {
    const {theme, classes} = props
    return (
        <Auxillery>
            <MuiThemeProvider theme={darkTheme}>

                <Paper elevation={10}>
                    <HomeBanner />
                </Paper>


                <PageBlock label={'About Me'} icon={<AboutMeIcon />} backgroundColor={theme.palette.primary.main}>
                    <SlideIn partial={true}>
                        <Display3>About me</Display3>
                    </SlideIn>
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <ScaleIn>
                                <AboutMeIcon className={classes.pageBlockIcon} />
                            </ScaleIn>
                        </Grid>
                        <Grid item xs={4} sm={2} />
                        <Grid item xs={12} />

                        {/* ********** intro */}
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <SlideIn partial={true}>
                                <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                                <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>
                            </SlideIn>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>

                </PageBlock>

            </MuiThemeProvider>

            <PageBlock icon={<SkillsIcon />} label={'Skills'} backgroundColor={theme.palette.grey.main}>

                <SlideIn partial={true}>
                    <Display3>Skills</Display3>
                </SlideIn>

                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn><SkillsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} /></ScaleIn>

                        <SlideIn partial={true}>
                            <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                            <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>
                        </SlideIn>

                        {/* ********** technical skill set */}
                        <Display1>Technical</Display1>
                        <SkillsBlockHolder type={'technical'} />

                        {/* ********** software skill set */}
                        <Display1>Software</Display1>
                        <SkillsBlockHolder type={'software'} />

                        {/* ********** other skill set */}
                        <Display1>Other</Display1>
                        <PageList list={[
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesup',
                            'incia volesci llandia dolup',
                            'incia volesci llandiolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup']} />
                    </Grid>
                </Grid>
            </PageBlock>

            <PageBlock icon={<ExamplesIcon />} label={'Examples'} backgroundColor={'white'}>
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Examples</Display3>
                        </SlideIn>
                    </Grid>
                </Grid>

                {/* ************************ RS COMPONENTS */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <CompanyLogo img={rsLogo} name={'RS Components'} width={100} />
                        <Display1>RS Components</Display1>

                        <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                        <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>

                        <Headline>Deliverables</Headline>

                        <PageList list={[
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesup',
                            'incia volesci llandia dolup',
                            'incia volesci llandiolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup']} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rs' />
                {/* {exampleImages.rs.map( ( exampleImage, i ) => {
                    return <PageImage key={i} src={exampleImage.src} title={exampleImage.title} subText={exampleImage.subText} />
                } ) */}


                {/* ************************ RHOKETT */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <CompanyLogo img={rhokettLogo} width={170} />
                        <Display1>Rhokett</Display1>


                        <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                        <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>

                        <Headline>Deliverables</Headline>

                        <PageList list={[
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesup',
                            'incia volesci llandia dolup',
                            'incia volesci llandiolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup']} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rhokett' />
                {/* {exampleImages.rhokett.map( ( exampleImage, i ) => {
                    return <PageImage key={i} src={exampleImage.src} title={exampleImage.title} subText={exampleImage.subText} />
                } ) */}


                {/* ************************ PRET */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <CompanyLogo img={pretLogo} width={170} />
                        <Display1>Pret a Manger</Display1>


                        <Typography variant="body1">Hiliquos alibus autem apid modios parchit, voloribusam, sandis re quis exceperum nimoles tibus, con eum quiatus millaborit dellectore sumquodita quaspid eatioribus mi, quam quo con repedis moloruptatem</Typography>
                        <Typography variant="body1">re necabor empellupit adictore et laborum quo odi vellore ictio. Perumquidunt quiaspe rcimus doluptassit, suntincia volesci llandia dolupis aut fugia sectesto iducimil eatquam quiaest, </Typography>

                        <Headline>Deliverables</Headline>

                        <PageList list={[
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesup',
                            'incia volesci llandia dolup',
                            'incia volesci llandiolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup',
                            'incia volesci llandia dolup']} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='pret' />
                {/* {exampleImages.pret.map( ( exampleImage, i ) => {
                    return <PageImage key={i} src={exampleImage.src} title={exampleImage.title} subText={exampleImage.subText} />
                } )} */}


            </PageBlock>

            <PageBlock icon={<RecommendationsIcon />} label={'Recommendations'} backgroundColor={theme.palette.grey.main}>
                <SlideIn partial={true}>
                    <Display3>Recommendations</Display3>
                </SlideIn>

                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn>
                            <RecommendationsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>
                    </Grid>
                </Grid>

                <ReferenceHolder />
            </PageBlock>
        </Auxillery >
    )
}

export default withTheme()( withStyles( styles )( home ) )
