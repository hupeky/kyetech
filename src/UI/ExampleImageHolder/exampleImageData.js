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
            url: 'http://kye.tech/imgs/rs/mobile.jpg',
            title: 'Title for the image',
            body:
                <React.Fragment>
                    <Typography variant={'body1'}>
                        <b>Here1 is a sub text,</b> offering a brief description and a little more detail
                    </Typography>
                    <PageList columns={2} list={[
                        <b>Here1 is a sub text,</b>,
                        'incia volesci llandia dolup',
                        'incia volesup',
                        'incia volesci llandia dolup',
                        'incia volesci llandiolup',
                        'incia volesci llandia dolup',
                        'incia volesci llandia dolup',
                        'incia volesci llandia dolup']} />
                </React.Fragment>
        },
        {
            url: 'http://kye.tech/imgs/rs/laptop.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            url: 'http://kye.tech/imgs/rs/finder.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            url: 'http://kye.tech/imgs/rs/bench1.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            url: 'http://kye.tech/imgs/rs/bench3.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        }
    ],
    rhokett: [
        {
            url: 'http://kye.tech/imgs/rhokett/app.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            url: 'http://kye.tech/imgs/rhokett/macbook.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            url: 'http://kye.tech/imgs/rhokett/3dback.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            url: 'http://kye.tech/imgs/rhokett/3dfront.jpg',
            title: 'Title for the image',
            body: 'Here is a sub text, offering a brief description and a little more detail'
        }
    ],
    pret: [
        {
            url: 'http://kye.tech/imgs/pret/mobile.jpg',
            title: 'Title for the image',

        },
        {
            url: 'http://kye.tech/imgs/pret/product.jpg',
            title: 'Title for the image',

        },
        {
            url: 'http://kye.tech/imgs/pret/packaging.jpg',
            title: 'Title for the image',

        }
    ]
}

export default exampleImages
