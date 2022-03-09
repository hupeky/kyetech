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

const exampleImages = {
    logos: {
        rbs: rbsLogo,
        rs: rsLogo,
        pret: pretLogo,
        rhokett: rhokettLogo,
        toptal: toptalLogo,
        verizon: verizonLogo,
        kadtech: kadtechLodo


    },
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

    rs: [
        {
            url: 'https://kye.tech/imgs/rs/bench1.jpg',
            title: 'Web based 3D product viewer',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        I created a prototype 3d system built for exploring high end products using a mix of traditional web and 3d content that seamlessly interact with each other.  In building this, I elevated the reputation of the business as a company involved in innovating for our customers and the technology went on to be used by other areas of the business.
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
            url: 'https://kye.tech/imgs/rhokett/3dback.jpg',
            title: 'WebVR prototype product viewer',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        This is an in web page shot of the product viewing system in action, with the camera panned around to the back of the product.
                    </Typography>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'GSAP',
                        'CSS3',
                        'HTML']} />
                </React.Fragment>,
            width: 1894,
            height: 1009
        },
        {
            url: 'https://kye.tech/imgs/rhokett/3dfront.jpg',
            title: 'Photorealism for web',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        Using Reality Capture, I was able to capture, photorealstic 3d models combined with traditional 3D with fast efficient rendering.
                    </Typography>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'WebVR',
                        'AFrame',
                        'JS2015+',
                        'Reality Capture']} />
                </React.Fragment>,
            width: 1887,
            height: 986

        }
    ]

}

export default exampleImages

