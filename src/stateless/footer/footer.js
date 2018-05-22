import React from 'react'

import Grid from '@material-ui/core/Grid'
import List, {ListItem, ListItemIcon, ListItemText} from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import ListIcon from '../../assets/SVG/Tile/listIcon.svg'
import classes from './footer.css'

const footer = ( props ) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.column}>
                <div className={classes.footerItem}>
                    <img className={classes.footerIcon} src={ListIcon} role="presentation" />
                    <Typography variant='body2'> linkedin.com/in/kyehuelin</Typography>
                </div>
                <div className={classes.footerItem}>
                    <img className={classes.footerIcon} src={ListIcon} role="presentation" />
                    <Typography variant='body2'> 07490 696991</Typography>
                </div>
                <div className={classes.footerItem}>
                    <img className={classes.footerIcon} src={ListIcon} role="presentation" />
                    <Typography variant='body2'> kyehuelin@gmail.com</Typography>
                </div>
            </div>
        </footer>
    )
}

export default footer
