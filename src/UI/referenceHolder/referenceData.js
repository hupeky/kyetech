import React from 'react'

import emily from '../../assets/imgs/emily.jpg'
import piaLogo from '../../assets/SVG/logos/companies/pia.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'

import Typography from '@material-ui/core/Typography'

const referenceData = [
    {
        img: piaLogo,
        title: 'PIA Ltd',
        body:
            <React.Fragment>
                <Typography variant="body1">Kye has many qualities to offer.  His work was always excellent and he proved to be a very capable member of our team. Kye controlled all aspects of PIA’s creative requirements including the company websites, brochures, exhibition stands and all external marketing material.</Typography >
                <Typography variant="body1">He also managed the creative needs of our network of partners that we collaborated with.</Typography >
                <Typography variant="body1">His work was always flawless, he was a true asset to our team and is fully recommended.</Typography >
            </React.Fragment>
    },
    {
        img: rhokettLogo,
        title: 'Rhokett Ltd',
        body:
            <React.Fragment>
                <Typography variant="body1">Kye has worked closely with Rhokett, developing our branding identity.  His work has been crucial in branding and launching our products. He designed and hand coded a beautiful and intuitive website.</Typography >
                <Typography variant="body1">Our packaging stands out to such an extent that it has brought the brand to the attention of numerous new customers. His packaging design has been nominated for a packaging award this year.</Typography >
                <Typography variant="body1">Kye has a brilliant creative and technical mind. He is highly recommended by us.</Typography >
            </React.Fragment>
    },
    {
        img: emily,
        title: 'Emily Thorpe',
        body:
            <React.Fragment>
                <Typography variant="body1">Kye was recommended to me by a friend when I was looking for a rebrand of my website. I had outgrown my old website and I really needed something that reflected my brand and my personality.</Typography >
                <Typography variant="body1">His technical ability is exceptional but beyond that Kye has a great eye for design and takes the time to understand exactly what his client wants.</Typography >
                <Typography variant="body1">I would highly recommend his services.</Typography >
            </React.Fragment>
    }
]

export default referenceData
