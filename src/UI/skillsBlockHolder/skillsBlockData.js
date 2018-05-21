// component for lists
import ListItem from '../../UI/ListItem/ListItem'

 // hoc svg component for animating icons
import ReactLogo from '../../assets/SVG/logos/technical/ReactLogo'
import ReduxLogo from '../../assets/SVG/logos/technical/ReduxLogo'
import JS2015Logo from '../../assets/SVG/logos/technical/JS2015Logo'
import WebpackLogo from '../../assets/SVG/logos/technical/WebpackLogo'
import PixiLogo from '../../assets/SVG/logos/technical/PixiLogo'
import GreensockLogo from '../../assets/SVG/logos/technical/GreensockLogo'
import GithubLogo from '../../assets/SVG/logos/technical/GithubLogo'
import AframeLogo from '../../assets/SVG/logos/technical/AframeLogo'

 // standard svg imports for list
import adobeAI from '../../assets/SVG/logos/software/adobeAI.svg'
import adobeID from '../../assets/SVG/logos/software/adobeID.svg'
import adobePS from '../../assets/SVG/logos/software/adobePS.svg'
import adobeXD from '../../assets/SVG/logos/software/adobeXD.svg'
import maya from '../../assets/SVG/logos/software/maya.svg'
import realityCapture from '../../assets/SVG/logos/software/realityCapture.svg'
import sketch from '../../assets/SVG/logos/software/sketch.svg'
import vsCode from '../../assets/SVG/logos/software/vsCode.svg'

const logos = {
    software: [
        {
            component: ListItem,
            img:vsCode,
            id: 'vscode',
            title: 'VS Code'
        },
        {
            component: ListItem,
            img:maya,
            id: 'maya',
            title: 'Maya 2018'
        },
        {
            component: ListItem,
            img:sketch,
            id: 'sketch',
            title: 'Sketch'
        },
        {
            component: ListItem,
            img:realityCapture,
            id: 'realityCapture',
            title: 'Reality Capture'
        },
        {
            component: ListItem,
            img:adobeXD,
            id: 'adobeXD',
            title: 'adobe XD'
        },
        {
            component: ListItem,
            img:adobePS,
            id: 'adobePS',
            title: 'Photoshop'
        },
        {
            component: ListItem,
            img:adobeID,
            id: 'adobeID',
            title: 'InDesign'
        },
        {
            component: ListItem,
            img:adobeAI,
            id: 'adobeAI',
            title: 'Illustrator'
        }
    ],
    technical: [
        {
            component: ReactLogo,
            id: 'react',
            title: 'React'
        },
        {
            component: ReduxLogo,
            id: 'redux',
            title: 'Redux'
        },
        {
            component: JS2015Logo,
            id: 'JS2015',
            title: 'JS 2015+'
        },
        {
            component: WebpackLogo,
            id: 'webpack',
            title: 'Webpack'
        },
        {
            component: PixiLogo,
            id: 'pixi',
            title: 'Pixi.js'
        },
        {
            component: GreensockLogo,
            id: 'greensock',
            title: 'GSAP'
        },
        {
            component: GithubLogo,
            id: 'github',
            title: 'Github'
        },
        {
            component: AframeLogo,
            id: 'aframe',
            title: 'WebVR'
        }
    ]
}


export default logos
