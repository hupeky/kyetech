import React from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'

import Display3 from '../../UI/Display3/Display3'
import Display1 from '../../UI/Display1/Display1'
import Headline from '../../UI/headline/headline'

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
import ExampleImageHolder from '../../UI/ExampleImageHolder/ExampleImageHolder'

import rsLogo from '../../assets/SVG/logos/companies/rsLogo.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'
import verizonLogo from '../../assets/SVG/logos/companies/verizonMedia.svg'
import kadtechLogo from '../../assets/SVG/logos/companies/kadtech.svg'
import leviLogo from '../../assets/SVG/logos/companies/levi.svg'
import vodafoneLogo from '../../assets/SVG/logos/companies/vodafone.svg'

import ExamplesIcon from '@material-ui/icons/Devices'
import SkillsIcon from '@material-ui/icons/Settings'
import AboutMeIcon from '@material-ui/icons/FormatQuote'

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
                            <ScaleIn offset={50}>
                                <AboutMeIcon className={classes.pageBlockIcon} />
                            </ScaleIn>
                        </Grid>
                        <Grid item xs={4} sm={2} />
                        <Grid item xs={12} />

                        {/* ********** intro */}
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <SlideIn partial={true}>
                            <SlideIn partial={true}>
                                    <Typography variant="body1">
                            With a life-long interest in 3d technology, I’ve spent the last 4 years developing web AR/VR software. I am passionate about this space and see 3d web applications as the future for delivering immersive 3d content to the mainstream. </Typography>
                            </SlideIn>
                            <SlideIn partial={true}>
                                    <Typography variant="body1">
                                        I have experience developing full stack 3d webXR applications that are cross platform and cross browser compatible. I have also developed retail AR technology for mobile, delivering interactive sales and marketing content.</Typography>
                                        </SlideIn>
                                        <SlideIn partial={true}>
                                    <Typography variant="body1">
                                        I have knowledge of the latest frameworks and tools like Babylon, Three, WebXR, React and many more, see the list below for more details. I’ll continue to evolve in this technology space and look forward to the next challange.</Typography>

                                        </SlideIn>

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
                        <ScaleIn offset={50}>
                            <SkillsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>

                        <SlideIn partial={true}>
                            <Typography align='center' variant="body1">Here are just some of the tools and frameworks I use on a daily basis</Typography>
                        </SlideIn>

                        {/* ********** technical skill set */}
                        <Display1>Technical</Display1>
                        <SkillsBlockHolder type={'technical'} />

                        {/* ********** software skill set */}
                        <Display1>Software</Display1>
                        <SkillsBlockHolder type={'software'} />

                        {/* ********** other skill set */}
                        <Display1>Other</Display1>
                        <PageList columns={2} list={[
                            'Rapid learning'
                            , 'Detailed researching',
                            'Prototyping and testing',
                            'Strong communicator ',
                            'Good presentation skills',
                            'Can influence at senior level',
                            'Exposure to agile environment',
                            'Creative and design sensibility'
                        ]} />
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

                {/* ************************ Kadtech */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={kadtechLogo} name='Verizon Media' />
                        </ScaleIn>
                        <Typography variant="body1">I have co-developed a web-based 3D application, that runs in VR, desktop and mobile from a single JavaScript codebase.  Delivered through the cloud using AWS services on a Node server environment, I have a deep knowledge of the pipeline, workflow and technology stack. For the front end I setup a combination of Babylon, WebXr, React and Zustand with transient store updates for performant per frame state driven component based 3d.</Typography >

                    </Grid>
                </Grid>
                <ExampleImageHolder company='kadtech' />

                {/* ************************ Levi */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={leviLogo} name='Levi Strauss' />
                        </ScaleIn>
                        <Typography variant="body1">I was responsible for the RnD of 3d technology and techniques to support Levi’s vision of digital garment design and sales using immersive technology. I designed and developed a prototype web 3d garment configurator, I also built a layered clothing and configurator system for a social gaming platform. I led and mentored a small team, supporting their technical development through workshops and 1 to 1 sessions. I also led the jira / project management process.</Typography >

                    </Grid>
                </Grid>
                <ExampleImageHolder company='levi' />

                {/* ************************ Verizon Media */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={verizonLogo} name='Verizon Media' />
                        </ScaleIn>
                        <Typography variant="body1">I supported development of a retail AR product delivering marketing and advertising experiences. I also research and developed shader code for running animations on the GPU via a technology called Vertex Animation Textures, which is a process of saving complex animation data from Houdini into texture files for decoding on the GPU.</Typography >

                    </Grid>
                </Grid>
                <ExampleImageHolder company='verizon' />

                {/* ************************ vodafone */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={vodafoneLogo} name='Vodafone' />
                        </ScaleIn>
                        <Typography variant="body1">I designed and developed a 2d / 3d data visualisation dashboard application.  Using Deck.GL with React, GraphQL, Mongo and D3. It was built to help senior leadership make predictive decisions to improve business efficiency.</Typography >

                    </Grid>
                </Grid>
                <ExampleImageHolder company='vodafone' />


                {/* ************************ RS COMPONENTS */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={rsLogo} name={'RS Components'} width={100} />
                        </ScaleIn>
                        <Display1>RS Components</Display1>
                        <Typography variant="body1">Interactive prodcut viewing system using Three.js </Typography >

                    </Grid>
                </Grid>
                <ExampleImageHolder company='rs' />

                {/* ************************ RHOKETT */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={rhokettLogo} width={170} />
                        </ScaleIn>
                        <Display1>Rhokett</Display1>


                        <Typography variant="body1">Rhokett is a company Ive done a lot of freelance work for over the years, most recently I worked on a prototype for a new 3d product viewing system for their dessert range using a photogrammetry technique for photorealistic 3d. Its then run through simplification processes to bring each dessert down from 60MB of data to under 1MB and can run on low-end devices. </Typography>

                        <Headline>Deliverables</Headline>

                        <PageList columns={1} list={[
                            'Created award nominated designs for luxury packaging',
                            'Designed and built their web site end to end',
                            'Prototyped 3D photogrammatery for photo-real products'
                        ]} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rhokett' />

                {/* ************************ PRET */}
                {/* <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo style={{marginBottom: '50px'}} img={pretLogo} width={170} />
                        </ScaleIn>
                    </Grid>
                </Grid>
                <ExampleImageHolder company='pret' />

            </PageBlock> */}

            {/* <PageBlock icon={<RecommendationsIcon />} label={'Recommendations'} backgroundColor={theme.palette.grey.main}> */}


                {/* <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Recommendations</Display3>
                        </SlideIn>
                        <ScaleIn offset={50}>
                            <RecommendationsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>
                    </Grid>
                </Grid> */}

                {/* <ReferenceHolder /> */}
            </PageBlock>
        </Auxillery >
    )
}

export default withTheme()( withStyles( styles )( home ) )
