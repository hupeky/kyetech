import React from 'react'

import {withStyles} from 'material-ui/styles'

import Card, {CardContent, CardMedia} from 'material-ui/Card'

import refImg from '../../../assets/imgs/refImg.jpg'
import quoteMarks from '../../../assets/SVG/quoteMarks.svg'
import Typography from 'material-ui/Typography'

const styles = theme => ( {
    card: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        [theme.breakpoints.down( 'sm' )]: {flexDirection: 'column'}
    },
    refImgHolder: {
        width: '100%',
        maxWidth: '200px',
        minWidth: '150px',
        padding:'20px',
        boxSizing: 'border-box'
    },
    refImg: {
        borderRadius: 1000,
        height: 0,
        width: '100%',
        paddingTop: '100%', // 16:9
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    quoteMarks: {
        width: '40px',
        margin: '20px 5%'
    }
} )

const referenceItem = ( props ) => {
    const {classes} = props
    return (
        <Card className={classes.card}>
            <div className={classes.refImgHolder}>
                <div style={{backgroundImage: `url(${refImg})`}} className={classes.refImg} />
            </div>
            <img className={classes.quoteMarks} src={quoteMarks} role="presentation"/>
            <CardContent>
                <Typography variant='headline'>Title goes here</Typography>
                <Typography variant='body1'>Body goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes hereBody goes here</Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles( styles )( referenceItem )