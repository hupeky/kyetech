import React from 'react'
import Display1 from '../../UI/Display1/Display1'
import Typography from '@material-ui/core/Typography'
import PageList from '../../UI/pageList/pageList'

import rsLogo from '../../assets/SVG/logos/companies/rsLogo.svg'
import pretLogo from '../../assets/SVG/logos/companies/pretStar.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'

const exampleImages = {
    logos: {
        rs: rsLogo,
        pret: pretLogo,
        rhokett: rhokettLogo
    },
    rs: [
        {
            url: 'https://kye.tech/imgs/rs/mobile.jpg',
            title: 'Mobile prototyping with UX',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        I worked with UX to develop a mobile prototype interface for the product select. This was based on user research data, and was adopted as the interface method for the ecommerce platform.
                    </Typography>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'Bootstrap',
                        'Jquery',
                        'CSS']} />
                </React.Fragment>,
            width: 1900,
            height: 1188
        },
        {
            url: 'https://kye.tech/imgs/rs/laptop.jpg',
            title: 'Marketing development for global brands',
            body:
                <Typography variant={'body1'}>
                    Supported global tech brands such as Siemens, Panasonic, TE, and Omron. With all channels of marketing for a number of European countries, new product releases and big campaign initiatives.'
            </Typography>,
            width: 1884,
            height: 1055
        },
        {
            url: 'https://kye.tech/imgs/rs/finder.jpg',
            title: '2D product viewer',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        In one of our innovation initiatives, I supported the development of an interactive product finder for a number of international markets, to aid in the discovery and purchase of automation and control components.
                </Typography>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'GSAP',
                        'CSS3',
                        'HTML']} />
                </React.Fragment>,
            width: 1900,
            height: 1597
        },
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
            url: 'https://kye.tech/imgs/rhokett/app.jpg',
            title: '2D / 3D mix site design',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        This concept, produced for the client is another example of combining traditional web content with cutting edge 3D. (WebVR) </Typography>
                    <Typography variant={'body2'}>Developed with:</Typography>
                    <PageList columns={2} list={[
                        'Javascript',
                        'WebVR',
                        'CSS3',
                        'HTML']} />
                </React.Fragment>,
            width: 2400,
            height: 1600
        },
        {
            url: 'https://kye.tech/imgs/rhokett/macbook.jpg',
            title: 'Desktop view of site',
            width: 1920,
            height: 1027
        },
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
    ],
    pret: [
        {
            url: 'https://kye.tech/imgs/pret/mobile.jpg',
            title: 'Front-end development',
            width: 1900,
            height:1123

        },
        {
            url: 'https://kye.tech/imgs/pret/product.jpg',
            title: '3D product vis',
            width: 1920,
            height:1147

        },
        {
            url: 'https://kye.tech/imgs/pret/packaging.jpg',
            title: 'Packaging design',
            width: 1920,
            height:1256

        }
    ]
}

export default exampleImages
