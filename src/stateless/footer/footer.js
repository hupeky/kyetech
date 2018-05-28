import React from 'react'
import Typography from '@material-ui/core/Typography'
import classes from './footer.css'
import SecondaryLinks from '../secondaryLinks/secondaryLinks'

const footer = ( props ) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.column}>
                <Typography variant='subheading'><a href="tel:+44 7490 696 991">+44 7490 696 991</a> </Typography>

                <Typography style={{marginBottom: '20px'}} variant='subheading'> <a href="mailto:kyehuelin@gmail.com">kyehuelin@gmail.com</a></Typography>
                <SecondaryLinks  />
            </div>
        </footer>
    )
}

export default footer
