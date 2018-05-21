import React from 'react'

import Grid from 'material-ui/Grid'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'

import ListIcon from '../../assets/SVG/Tile/listIcon.svg'
import classes from './footer.css'

const footer = ( props ) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.column}>
                <div className={classes.footerItem}>
                    <img className={classes.footerIcon} src={ListIcon} role="presentation" />
                    <Typography variant='body2'> Fuck you</Typography>
                </div>
                <div className={classes.footerItem}>
                    <img className={classes.footerIcon} src={ListIcon} role="presentation" />
                    <Typography variant='body2'> Fuck yASaou</Typography>
                </div>
                <div className={classes.footerItem}>
                    <img className={classes.footerIcon} src={ListIcon} role="presentation" />
                    <Typography variant='body2'> Fuck you</Typography>
                </div>
            </div>
        </footer>
    )
}

export default footer
