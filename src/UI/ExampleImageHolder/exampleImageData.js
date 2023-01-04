import React from 'react'
import Typography from '@material-ui/core/Typography'
import PageList from '../../UI/pageList/pageList'

import rsLogo from '../../assets/SVG/logos/companies/rsLogo.svg'
import pretLogo from '../../assets/SVG/logos/companies/pretStar.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'
import rbsLogo from '../../assets/SVG/logos/companies/rbs.svg'
import toptalLogo from '../../assets/SVG/logos/companies/toptal.svg'
import verizonLogo from '../../assets/SVG/logos/companies/verizonMedia.svg'
import kadtechLodo from '../../assets/SVG/logos/companies/kadtech.svg'
import leviLogo from '../../assets/SVG/logos/companies/levi.svg'
import vodafoneLogo from '../../assets/SVG/logos/companies/vodafone.svg'

const exampleImages = {
    logos: {
        rbs: rbsLogo,
        rs: rsLogo,
        pret: pretLogo,
        rhokett: rhokettLogo,
        toptal: toptalLogo,
        verizon: verizonLogo,
        kadtech: kadtechLodo,
        vodafone: vodafoneLogo,
        levi: leviLogo


    },

    levi: [

        {
            video: 'https://www.youtube.com/embed/nzZ-ALsBizA',
            title: 'Layered clothing pipeline for 3d web and Roblox',
            body:
                <React.Fragment>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                    'Babylon.js',
                    'React / Hooks',
                    'Typescript',
                    'Zustand',

                    'Roblox Studio',
                    'Clo3d',
                    'Luau',
                    'Maya/Blender']} />
                </React.Fragment>,
            width: 1920,
            height: 1080
        }
    ],

    kadtech: [
        {
            url: 'http://kad.tech/examples/shot1a.jpg',
            width: 1000,
            height: 520

        },
        {
            url: 'http://kad.tech/examples/shot2a.jpg',
            width: 1000,
            height: 520

        },
        {
            url: 'http://kad.tech/examples/shot3a.jpg',
            width: 1000,
            height: 520

        }

    ],
    verizon: [

        {
            video: 'https://www.youtube.com/embed/nkuMlVWGx90',
            title: 'Retail Web Augmented Reality App',
            body:
                <React.Fragment>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                     '8th Wall AR platform',
                     'Three.js ',
                     'React - Hooks',
                     'Javascript / Typescript']} />
                </React.Fragment>,
            width: 1920,
            height: 1080
        },
        {
            video: 'https://www.youtube.com/embed/1nso0Ru5RWk',
            title: 'Vertex animation texture - GPU WebGL shader',
            body:
                <React.Fragment>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Three.js ',
                        'GLSL Shader Language',
                        'Houdini'
              ]} />
                </React.Fragment>,
            width: 1920,
            height: 1080
        }
    ],
    vodafone: [
        {
            video: 'https://www.youtube.com/embed/GSSukg4VaEQ',
            title: 'Custom data dashboard',
            body:
                <React.Fragment>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'redux',
                        'D3',
                        'React',
                        'Deck.GL']} />
                </React.Fragment>,
            width: 1920,
            height: 1080
        }
    ],


    rs: [
        {
            url: 'https://kye.tech/imgs/rs/bench1.jpg',
            title: 'Web based 3D product viewer',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                    </Typography>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'Three.js',
                        'Web GL',
                        'HTML']} />
                </React.Fragment>,
            width: 1920,
            height: 1027
        },
        {
            url: 'https://kye.tech/imgs/rs/bench3.jpg',
            title: 'Web based 3D product viewer',
            width: 1920,
            height: 1027
        }
    ],
    rhokett: [
        {
            video: 'https://www.youtube.com/embed/WS4Q0RZlfsI',
            title: '3d Product Viewing System',
            body:
                <React.Fragment>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'GSAP',
                        'CSS3',
                        'HTML']} />
                </React.Fragment>,
            width: 1920,
            height: 1080
        }


    ]

}

export default exampleImages

